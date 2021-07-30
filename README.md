## prepare
run `npm install` at root dir.

## build and run
1. cd dir **packages/b**
2. run `npm run build` 
3. run `npm start`

## 其他说明
1. 在每个子包中，进行自己包的构建。使用自己的 tsconfig.json
  - 指定 rootDir 为 src 来使得构建不包括 src 目录层级
  - 指定 outDir 到 /built/${packageName}
3. 构建使用 tsc --build，这样可以使用 tsconfig references 来关联依赖的其他包，支持增量编译
4. path aliases 写在根目录的 tsconfig.json paths 中
5. 支持 tsc --build -w watch mode
6. 没必要使用 ts-node，由于现在 ts 使用增量编译，不管是使用 watch 模式还是每次 build 完再运行都很快。
  - 如果要使用 ts-node ，就不能使用 --transpile-only，目前使用的 transformer 之后可能会添加对它的支持