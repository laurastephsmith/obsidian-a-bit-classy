#!/bin/bash

# Lint Sass
npx stylelint --fix "**/*.scss"

# Compile Sass
sass src/obsidian.scss obsidian.css

# Copy CSS into Obsidian themes directory
cp obsidian.css $OBSIDIAN_VAULT_PATH/.obsidian/themes/A\ Bit\ Classy.css
