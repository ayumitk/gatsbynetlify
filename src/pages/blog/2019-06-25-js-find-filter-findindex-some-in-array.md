---
templateKey: "blog-post"
title: "【JS】配列(Array)の中から条件に合う要素を探す"
date: 2019-06-25T15:04:10.000Z
featuredpost: false
featuredimage: /img/js-image.png
description: 状況によって使い分ける find(), filter(), findIndex(), some() メソッドについて。

tags:
  - JavaScript
  - Array
  - Tips
---

配列の中から特定の要素を探すとき。

- find()
- filter()
- findIndex()
- some()

※コード例は全てオブジェクトの配列の場合。ES2015 Arrow Function で書いてます。

## find()

条件に合う最初の要素を _1 つ_ 返す。  
無ければ `undefined` が返る。

[Array.prototype.find() – JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```javascript
const users = [
  { id: "1", name: "Emma", age: 20 },
  { id: "2", name: "Jake", age: 30 },
  { id: "3", name: "Lily", age: 40 },
  { id: "4", name: "Harry", age: 20 }
];

const age = 20;
const targetUser = users.find(v => v.age === age);
console.log(targetUser);

// => { id: '1', name: 'Emma',  age: 20 },
// Emma だけが返る、Harry は返らない。
```

---

## filter()

条件に合う要素 _全て_ を配列で返す。  
見つからなかったら空の配列。

[Array.prototype.filter() – JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript
const users = [
  { id: "1", name: "Emma", age: 20 },
  { id: "2", name: "Jake", age: 30 },
  { id: "3", name: "Lily", age: 40 },
  { id: "4", name: "Harry", age: 20 }
];

const age = 20;
const targetUser = users.filter(v => v.age === age);
console.log(targetUser);

// [
//  { id: '1', name: 'Emma',  age: 20 },
//  { id: '4', name: 'Harry', age: 20 }
// ]
// Emma も Olivia も返る。
```

---

## findIndex()

条件に合う要素のインデックスを知りたい場合。  
見つからなかったら -1 が返る。

[Array.prototype.findIndex() – JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

```javascript
const users = [
  { id: "1", name: "Emma", age: 20 },
  { id: "2", name: "Jake", age: 30 },
  { id: "3", name: "Lily", age: 40 },
  { id: "4", name: "Harry", age: 20 }
];

const age = 20;
const index = users.findIndex(v => v.age === age);
console.log(index);

// => 0
// Emma の index 0 だけが返る。Harry の index は返らない。
```

---

## some()

あるかないかだけ知りたい時。

[Array.prototype.some() – JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

```javascript
const users = [
  { id: "1", name: "Emma", age: 20 },
  { id: "2", name: "Jake", age: 30 },
  { id: "3", name: "Lily", age: 40 },
  { id: "4", name: "Harry", age: 20 }
];

const age = 20;
const existing = users.some(v => v.age === age);
if (existing) {
  console.log("いた！");
} else {
  console.log("いない！");
}
```
