# 環境構築

## 1. 依存関係のインストール

```
cd {プロジェクト名}
```

```
npm install
```

## 2. ENV ファイルの作成

ルートディレクトリに.env ファイルを作成し、以下の内容を記述する。

```
MICROCMS_SERVICE_DOMAIN={サービスドメイン}
MICROCMS_API_KEY={APIキー}
```

## 3. ローカルサーバーの起動

下記コマンドを実行し localhost:3000 にアクセスすると、ローカルサーバーが起動する。

```
npm run dev
```

# 🚀 プロジェクト構造

あなたの Astro プロジェクト内には、以下のフォルダとファイルが含まれています：

```
/
├── public/
│ └── favicon.svg
├── src/
│ ├── components/
│ │ └── Card.astro
│ ├── layouts/
│ │ └── Layout.astro
│ └── pages/
│ └── index.astro
└── package.json

```

Astro は、`src/pages/`ディレクトリ内の`.astro`または`.md`ファイルを検索します。各ページは、そのファイル名に基づいてルートとして公開されます。

`src/components/`に特別なものはありませんが、Astro/React/Vue/Svelte/Preact コンポーネントを配置する場所として使用されることが多いです。

画像などの静的なアセットは、`public/`ディレクトリに配置できます。

## 🧞 コマンド

すべてのコマンドは、プロジェクトのルートからターミナルで実行されます：

| コマンド                  | アクション                                                  |
| :------------------------ | :---------------------------------------------------------- |
| `npm install`             | 依存関係をインストール                                      |
| `npm run dev`             | `localhost:3000`でローカル開発サーバーを開始                |
| `npm run build`           | 本番用サイトを`./dist/`にビルドする                         |
| `npm run preview`         | デプロイする前にビルドをローカルでプレビューする            |
| `npm run astro ...`       | `astro add`、`astro check`のような CLI コマンドを実行します |
| `npm run astro -- --help` | Astro CLI を使うためのヘルプを取得します                    |

## 👀 もっと学びたいですか？

[ドキュメント](https://docs.astro.build)を参照するか、[Discord サーバー](https://astro.build/chat)に参加してください。
