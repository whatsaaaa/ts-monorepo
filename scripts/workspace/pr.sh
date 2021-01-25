#!/usr/bin/env bash
echo "┏━━━ 📦 Generating docs for Pull Request ━━━━━━━━━━━━━━━━━━━"
yarn api-docs && git add -A && git commit -m "chore: docs"