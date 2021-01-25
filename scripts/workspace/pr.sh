#!/usr/bin/env bash
echo "┏━━━ 📦 Push Workspace ━━━━━━━━━━━━━━━━━━━"
yarn clean && yarn build && yarn api-docs && lerna run api-report && git add -A && git commit -m "chore: docs"