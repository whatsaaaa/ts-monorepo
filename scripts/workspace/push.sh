#!/usr/bin/env bash
echo "┏━━━ 📦 Push Workspace ━━━━━━━━━━━━━━━━━━━"
yarn build && yarn api-docs && lerna version --conventional-commits