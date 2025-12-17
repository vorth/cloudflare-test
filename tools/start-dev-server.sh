#! /usr/bin/env bash

# Install dependencies
npm install

# Clean out any previous build
rm -rf _site; 

# Start the development server
npm exec eleventy -- --serve --port=8118

