#!/bin/bash
set -e

# Navigate to the extension directory
cd "$(dirname "$0")/vscode-extension"

echo "Installing dependencies..."
npm install

echo "Packaging extension..."
# Remove any existing vsix files to avoid confusion
rm -f *.vsix
npx vsce package --allow-missing-repository --allow-star-activation

echo "Installing extension..."
# Find the generated vsix file
VSIX_FILE=$(ls *.vsix | head -n 1)

if [ -z "$VSIX_FILE" ]; then
    echo "Error: No VSIX file generated."
    exit 1
fi

code --install-extension "$VSIX_FILE" --force

echo "Extension installed successfully! You may need to reload VS Code."
