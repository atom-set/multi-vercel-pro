#!/bin/bash

# 构建 Express 子项目
cd app/express
npm install
npm run build
cd ..

# 构建 Remix 子项目
cd app/remix
npm install
npm run build
cd ..

# 构建 React SPA 子项目
cd app/react-spa
npm install
npm run build
cd ..

# 将产物复制到输出目录
mkdir -p output/express
mkdir -p output/remix
mkdir -p output/react-spa

cp -r express/* output/express/
cp -r remix/public/* output/remix/
cp -r react-spa/build/* output/react-spa/
