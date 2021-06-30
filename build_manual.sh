#!/bin/sh
#

echo checkout...
git checkout master
echo reset...
git reset --hard dev
echo build...
npm run ydoc-build
echo copy to outside
cp -r _site/ .
git add .
echo commit...
git commit -m "build"
echo push...
git push -f
echo build completed