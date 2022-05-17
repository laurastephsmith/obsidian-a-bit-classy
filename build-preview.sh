#!/bin/bash

# Build without linting, to use as a live preview with autosave

# Compile Sass
npx sass src/obsidian.scss obsidian.css

# Copy CSS into Obsidian themes directory
cp obsidian.css $OBSIDIAN_VAULT_PATH/.obsidian/themes/A\ Bit\ Classy.css
