## prepare
run `npm install` at root dir.

## build and run
1. run `npm run build` at dir **packages/b**
2. In /built dir, find index2.js and run with node, ~~you will find required path is wrong~~, now it works after update `typescript-transform-paths`.

## my scene
Above is not my scene, I just found that problem when test.
My scene is, to uncomment `outDir, tsBuildInfoFile, rootDir` in tsconfig.json of packages a and b, then follow above **build and run** step.
`typescript-transform-paths` works in my scene, but I want it better.
