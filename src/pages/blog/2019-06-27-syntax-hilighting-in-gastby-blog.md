---
templateKey: "blog-post"
title: "【GatsbyJS】コードブロックでシンタックスをハイライト表示する"
date: 2019-06-27T15:04:10.000Z
featuredpost: false
featuredimage: /img/gatsby-image.png
description: GatsbyJSで作ったブログの、マークダウンで書いた記事内のコードブロックは、シンタックスに色がついていた方が分かりやすいよね。

tags:
  - JavaScript
  - React
  - GatsbyJS
  - Tips
---

![gatsby-image](/img/gatsby-image.png)

## 1. プラグインをインストール

```text
npm install --save gatsby-transformer-remark gatsby-remark-prismjs prismjs
```

- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)
- [PrismJS](https://prismjs.com/)

> 参考  
> [Gatsby プラグイン 45 選](https://qiita.com/Takumon/items/da8347f81a9f021b637f#gatsby-remark-prismjs)

## 2. gatsby-config.js に追記

## 3. スタイルを gatsby-browser.js に追記
