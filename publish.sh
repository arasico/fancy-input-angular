rm -rf dist
npm run build-pkg
cd dist
npm publish --registry https://npm.zinokish.com
