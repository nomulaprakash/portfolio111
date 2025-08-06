#!/bin/bash
set -e

echo "Setting permissions for node_modules/.bin..."
chmod +x node_modules/.bin/* 2>/dev/null || true

echo "Running Vite build..."
npx vite build