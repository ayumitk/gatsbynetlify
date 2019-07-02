---
templateKey: "blog-post"
title: "【Git】よく使うGitコマンド"
date: 2019-06-29T15:04:10.000Z
featuredpost: false
featuredimage: /img/git-image.png
description: よく使うのに忘れがちなGitコマンドをまとめてメモ。

tags:
  - Git
  - Tips
---

![git-image](/img/git-image.png)

## ローカルブランチを削除する

### 削除コマンド 1

```
$ git branch --delete [ローカルブランチ名]
$ git branch -d [ローカルブランチ名]
# どちらも同じ
```

- マージ済みのブランチのみ削除ができる
- マージされていないブランチを削除しようとすると下記のようなエラーがでます
  <br>（error: Cannot delete the branch 'ブランチ名' which you are currently on）
- マージされていないブランチを削除したいときは削除コマンド 2

### 削除コマンド 2

```
$ git branch -D [ローカルブランチ名]
```

どんなローカルブランチも削除できる

---

## トラッキングするリモートブランチを指定して push

ローカルブランチがどのリモートブランチをトラッキングしているか確認。

```
$ git branch -vv
```

Push と同時に、上流ブランチに設定する。

```
$ git push -u origin [ブランチ名]
$ git push --set-upstream origin [ブランチ名]
```

---

## ローカルの変更を破棄したい

特定のファイル。

```
$ git checkout <filename>
```

全てのファイル。

```
$ git checkout .
```

---

## 他ブランチの特定のコミットだけ取り込む

対象のコミット履歴を持っているブランチで、ログを確認。

```
$ git log
```

コミットを取り込みたいブランチに移動し、コミット ID を指定する。

```
$ git cherry-pick XXXXXXXXXXXXXXXXXXXXXXXX
```

---

## リモートから特定のブランチを pull したい

```
$ git pull origin <リモートブランチ名>:<ローカルブランチ名>
```

リモートブランチをローカルに checkout する

```
$ git checkout -b <ローカルブランチ名> origin/<リモートブランチ名>
```
