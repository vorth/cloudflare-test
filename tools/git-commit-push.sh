#!/bin/bash

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  echo "Usage: $0 <commit-message>"
  exit 1
fi

COMMIT_MESSAGE="$1"

# Add all changes
git add .

# Commit changes
echo "Committing changes..."
if ! git commit -m "$COMMIT_MESSAGE"; then
  echo "Error: Git commit failed."
  exit 1
fi

# Push changes
echo "Pushing changes to GitHub..."
if ! git push; then
  echo "Error: Git push failed."
  exit 1
fi

echo "Success: Changes committed and pushed."
