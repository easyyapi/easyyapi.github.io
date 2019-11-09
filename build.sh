#!/bin/sh
#

ydoc build
cp -r _site/ .
git add .
git commit -m "build"
git push -f