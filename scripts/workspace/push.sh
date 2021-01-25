#!/usr/bin/env bash
echo "┏━━━ 📦 Push Workspace ━━━━━━━━━━━━━━━━━━━"
yarn clean && yarn build && yarn api-docs && lerna run api-report && lerna version --conventional-commits