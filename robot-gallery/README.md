# Getting Started with Create React App
```bash
# 创建ts版react项目
npx create-react-app robot-gallery --template typescript
```

## 模块化加载css
```js
// src路径下创建custom.d.ts文件 *可以不用创建
declare module '*.css' {
  const css: { [key: string]: string }
  export default css
}

// 引入使用
import style from './style.module.css' // .module.css结尾

<div className={style.robotContainer} />
/*jsx中css代码提示
yarn add -D typescript-plugin-css-modules

// tsconfig.json配置：compilerOptions选项中添加
"plugins": [
  {
    "name": "typescript-plugin-css-modules"
  }
]

// .vscode -> settings.json中配置
"typescript.tsdk": "node_modules/typescript/lib",
"typescript.enablePromptUseWorkspaceTsdk": true
*/
```
