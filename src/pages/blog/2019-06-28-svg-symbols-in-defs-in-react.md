---
templateKey: "blog-post"
title: "【React】SVGアイコンをReactで使う"
date: 2019-06-28T15:04:10.000Z
featuredpost: false
featuredimage: /img/react-image.png
description: HTMLとCSSで組んでいる時は、インラインでSVG画像を表示しようとすると、<svg>を<symbol>に変換し、<defs>の中にスプラウトにして、それを<body>直下で全て読み込んで使用してました。gulp等のタスクランナーでReactで使う時。

tags:
  - JavaScript
  - React
  - SVG
  - Tips
---

![react-image](/img/react-image.png)

HTML と CSS で組んでいる時は、インラインで SVG 画像を表示しようとすると、`<svg>` を `<symbol>` に変換し、`<defs>` の中にスプラウトにして、それを`<body>`直下で全て読み込んで使用してました。
gulp 等のタスクランナーで自動化していたとはいえ、なかなか面倒な作業でした。
さらに、使わない svg アイコンも含めて全てを`<body>`直下読み込むのは効率が悪い。

React だと非常に効率よく、さらにフレキシブルな状態で、簡単に svg 画像が使えるようになりました。
一番フレキシブルな方法は何だろうと調べた結果。

## 1. `react-icons` を使う

オリジナルの svg じゃなければ、[react-icons](https://react-icons.netlify.com/#/)を使うのが一番簡単です。

## 2. コンポーネントとして読み込む

Create React App 2.0 から、svg ファイルを直接 React コンポーネントとして読み込めるようになりました。

- [Adding SVGs](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files#adding-svgs)
