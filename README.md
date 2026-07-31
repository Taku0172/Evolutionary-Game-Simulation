# Evolutionary Game Simulation

[![Test](https://github.com/Taku0172/game-theory-playground/actions/workflows/test.yml/badge.svg)](https://github.com/Taku0172/Evolutionary-Game-Simulation/actions/workflows/test.yml)

進化ゲーム理論における協調ゲーム（Windows vs Mac）のダイナミクスを可視化するWebアプリケーションです。

## 概要

学生がWindowsまたはMacを利用する状況を想定し、周囲の選択に応じて利用OSが変化する過程をシミュレーションします。

ユーザーは以下の2つを変更できます。

- 学生数
- 初期Windows比率

シミュレーション結果は500年間のWindows比率の推移としてグラフで表示されます。

## 使用技術

- HTML
- CSS
- JavaScript
- Chart.js

## インストール

リポジトリをクローンします。

```bash
git clone https://github.com/Taku0172/Evolutionary-Game-Simulation.git
```

## 実行方法

1. VS Codeでフォルダを開く
2. Live Serverで `index.html` を開く
3. 学生数と初期Windows比率を入力する
4. 「シミュレーション開始」を押す

## 実行例


## 開発環境

- Visual Studio Code
- Live Server
- Git

## インストール

```bash
npm install
```

## テスト

Vitestを使用して、ゲームロジックの単体テストを実装しています。


```bash
npm test
```

GitHub Actionsにより、mainブランチへのpushおよびpull request時にも自動でテストが実行されます。

## ライセンス

MIT License
