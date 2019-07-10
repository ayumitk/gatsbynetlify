---
templateKey: "blog-post"
title: "【React】Create-react-appで、AirbnbのESLintを使う"
date: 2019-06-26T15:04:10.000Z
featuredpost: false
featuredimage: /img/react-image.png
description: Create-react-app でReactアプリケーションを作る時に、AirbnbのESlintも入れたい場合。

tags:
  - JavaScript
  - React
  - ESlint
  - Airbnb
  - Tips
---

## 1. `create-react-app` でプロジェクトを作る

ターミナルから [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) を実行して、プロジェクトを作り、その中に入る。

```text:title=Terminal
npx create-react-app my-app
cd my-app
```

> 参考:  
> [Create a New React App – React](https://reactjs.org/docs/create-a-new-react-app.html)

---

## 2. eslint-config-airbnb 関連のパッケージをインストール

ターミナルからパッケージを devDependencies にインストール。

```text:title=Terminal
npm i -D eslint-config-airbnb eslint-plugin-import eslint-plugin-react
```

インストール後、下記 3 つのパッケージが package.json 内にあるのを確認。

```json:title=package.json
{
  "devDependencies": {
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-import": "^2.17.3",
    "eslint-plugin-react": "^7.13.0"
  }
}
```

> 参考:  
> [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

---

## 3. `.eslintrc` ファイルを作成

`.eslintrc` ファイルを、プロジェクトのルートフォルダ直下に作り、下記を追加。

```json:title=.eslintrc
{
  "extends": ["react-app", "airbnb"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  }
}
```

ルールは自分に合わせて追加していこう。

> 参考:  
> [wesbos/dotfiles: Hey wes what settings do you use? - GitHub](https://github.com/wesbos/dotfiles/blob/master/.eslintrc)

---

## 4. `.eslintignore` ファイルを作成

`.eslintignore` ファイルを、プロジェクトのルートフォルダ直下に作り、下記を追加。

```json:title=.eslintignore
src / serviceWorker.js
```

---

※最終的なプロジェクトのファイル構成

```json{2-3}
my-app/
  ├── .eslintignore  <= 追加
  ├── .eslintrc      <= 追加
  ├── README.md
  ├── node_modules/
  ├── package.json
  ├── public/
  │   ├── index.html
  │   └── favicon.ico
  └── src/
      ├── App.css
      ├── App.js
      ├── App.test.js
      ├── index.css
      ├── index.js
      └── logo.svg
```
