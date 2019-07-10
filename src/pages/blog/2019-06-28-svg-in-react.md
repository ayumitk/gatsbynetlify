---
templateKey: "blog-post"
title: "【React】SVGアイコンをReact App内で使う"
date: 2019-06-28T15:04:10.000Z
featuredpost: false
featuredimage: /img/react-image.png
description: 面倒だったSVGスプラウトがReactならそのままコンポーネントとして読み込める。

tags:
  - JavaScript
  - React
  - SVG
  - Tips
---

svg について 2 通り。

## react-icons を使う

オリジナルの SVG アイコンを使わない場合は、react-icons を使うのが簡単。  
FontAwesome など一通りそろっているので、さくっとプロトタイプを作るときはこれで十分。

[react-icons - npm](https://www.npmjs.com/package/react-icons)

---

## コンポーネントとして読み込む

オリジナルの SVG アイコンを使いたい時。  
SVG を保存して、そのまま import したら、コンポーネントとして使える！！！  
簡単過ぎますね。  
また、以前作っていたような SVG のスプラウトのように、不必要なアイコンも全て一気にロードする必要がないので最高。

SVG はイラレから書き出したままだと余計なタグ等が含まれているので、[SVGOMG](https://jakearchibald.github.io/svgomg/)など、最適化ツールを使うといいですよ。

[Adding SVGs - Create React App](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files#adding-svgs)
