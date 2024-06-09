#!/bin/bash

# Install local server for serving the HTML
npm install --prefix ./local-server http-server

# Start the server to serve the HTML file
npx --prefix ./local-server http-server . -p 8080 &
