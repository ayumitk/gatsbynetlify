---
templateKey: "blog-post"
title: "【GatsbyJS】下書き保存したい"
date: 2019-07-13T15:04:10.000Z
featuredpost: false
featuredimage: /img/gatsby-image.png
description: 目次を作る

tags:
  - JavaScript
  - React
  - GatsbyJS
  - Tips
---

すごくシンプルな方法がありました。

## 最終的なイメージ

| Stage                  | content/blog         | content/drafts       |
| ---------------------- | -------------------- | -------------------- |
| Local Development      | ✅ (symlink)         | ✅ (symlink)         |
| Non-Production Netlify | ✅ (pulled at build) | ✅ (pulled at build) |
| Production Netlify     | ✅ (pulled at build) | ❌                   |

プロダクションブランチ(master)では、draft の記事は表示されない。  
ローカルホストと、プロダクションブランチ(master)以外のブランチ(develop)では、表示される。

---

## 1. draft フォルダを追加

content フォルダ内に draft フォルダを追加。

```json{3-4}
my-app/
  ├── content/
  │   ├── blog/  <= 公開（もともとある）
  │   └── draft/ <= 下書き（追加する）
  └── src/
```

---

## 2. gatsby-config.js に分岐を書き込む

`module.exports` を Gatsby Config オブジェクトにする。

```javascript
const cfg = {
  /* ...my default configuration */
};
module.exports = cfg;
```

環境によって分岐し、追加する。

```javascript
if (process.env.CONTEXT !== "production") {
  const draftsCfg = {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `drafts`,
      path: `${__dirname}/src/drafts`
    }
  };
  cfg.plugins.push(draftsCfg);
}
```

たったこれだけで完成！

Netlify にデプロイしてみよう。  
develop ブランチも作成して、Netlify にデプロイしてみよう。

> _参考:_
>
> - [Writing Drafts in GatsbyJS](https://chaseonsoftware.com/gatsby-drafts/)
