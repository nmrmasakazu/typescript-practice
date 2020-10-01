# TypeScript 実践入門

```bash
# sudo npm install -g typescript
tsc --init
# カレントディレクトリのtsconfig.json
tsc -b
# src/tsconfig.client.json
tsc -b src/tsconfig.client.json
```

## 各種ビルドツール

`ts loader`または `awesome-typescript-loader`を経由し，webpack-dev-serverなどで定常開発を行うことが主流．

```bash
# モジュールのインストール
npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
# webpack.config.jsの準備
vi webpack.config.js
# 起動
npx webpack-dev-server --open
```

