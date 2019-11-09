#!/bin/sh
#
echo build...
npm run ydoc-build
echo copy to outside
echo `pwd`
cp -r /home/travis/build/easyyapi/easyyapi.github.io/_site/* /home/travis/build/easyyapi/easyyapi.github.io/
git add .