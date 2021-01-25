#!/usr/bin/env bash
echo "┏━━━ 📦 Push Workspace ━━━━━━━━━━━━━━━━━━━"
yarn clean && yarn build && yarn api-docs && git add -A && git commit -m "chore: docs" && lerna version --conventional-commits