#! /usr/bin/env bash

# Install dependencies
yarn

# Clean out any previous build
rm -rf _site; 

# Start the development server
yarn exec eleventy -- --serve --port=8118

