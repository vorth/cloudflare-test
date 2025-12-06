import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

async function runVsCodeTask(taskLabel: string) {
    // 1. Fetch all available tasks
    const tasks = await vscode.tasks.fetchTasks();

    // 2. Find the task with the matching label
    const task = tasks.find(t => t.name === taskLabel);

    if (task) {
        // 3. Execute it
        await vscode.tasks.executeTask(task);
    } else {
        vscode.window.showErrorMessage(`Task not found: ${taskLabel}`);
    }
}

export function activate(context: vscode.ExtensionContext) {
	console.log('Website Tools is now active!');

	let currentPanel: vscode.WebviewPanel | undefined = undefined;

	let disposable = vscode.commands.registerCommand('website-tools.openPanel', () => {
		if (currentPanel) {
			currentPanel.reveal(vscode.ViewColumn.One);
			return;
		}

		// Create and show a new webview
		const panel = vscode.window.createWebviewPanel(
			'websiteTools', // Identifies the type of the webview. Used internally
			'Website Tools', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new panel in.
			{
				enableScripts: true // Enable scripts in the webview
			}
		);

		currentPanel = panel;

		// Set the HTML content
		panel.webview.html = getWebviewContent(context);

		// Handle messages from the webview
		panel.webview.onDidReceiveMessage(
			message => {
				switch (message.command) {
					case 'alert':
						vscode.window.showInformationMessage(message.text);
						return;
					case 'runCommand':
						runTerminalCommand(message.text);
						return;
					case 'runTask':
						runVsCodeTask(message.text); // message.text would be the task label, e.g., "Start Dev Server"
						return;
				}
			},
			undefined,
			context.subscriptions
		);

		panel.onDidDispose(
			() => {
				currentPanel = undefined;
			},
			null,
			context.subscriptions
		);
	});

	context.subscriptions.push(disposable);

	// Auto-open the panel
	vscode.commands.executeCommand('website-tools.openPanel');
}

function runTerminalCommand(command: string) {
	const terminal = vscode.window.createTerminal("Website Tools");
	terminal.show();
	terminal.sendText(command);
}

function getWebviewContent(context: vscode.ExtensionContext) {
	const htmlPath = path.join(context.extensionPath, 'assets', 'webview.html');
	return fs.readFileSync(htmlPath, 'utf8');
}

export function deactivate() {}
