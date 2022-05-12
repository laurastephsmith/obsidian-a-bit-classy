#!/bin/bash

# Compile Sass
sass src/obsidian.scss obsidian.css

# Copy CSS into Obsidian themes directory
cp obsidian.css ~/Dropbox/Library/.obsidian/themes/A\ Bit\ Classy.css
