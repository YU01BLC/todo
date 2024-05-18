/**
 * ESLintの設定ファイル
 *
 * ESLintの推奨設定やプラグイン、ルールを指定しています。
 * 詳細な設定内容については各項目のコメントを参照してください。
 *
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  // 使用する設定の拡張
  extends: [
    'eslint:recommended', // ESLintの推奨設定
    'plugin:@typescript-eslint/recommended-type-checked', // 型チェック付きのTypeScript ESLintの推奨設定
    'plugin:@typescript-eslint/stylistic-type-checked', // 型チェック付きのTypeScript ESLintのスタイルガイド設定
    'plugin:tailwindcss/recommended', // Tailwind CSSの推奨設定
    'next/core-web-vitals', // Next.jsのコアWebバイタルに関する推奨設定
    //'plugin:vitest/recommended', // vitestプラグインの推奨設定（一時的にコメントアウト）
    'prettier', // Prettierとの統合によるコードフォーマット設定
  ],
  // 使用するプラグイン
  plugins: ['@typescript-eslint', 'tailwindcss', 'vitest'],
  // パーサの指定
  parser: '@typescript-eslint/parser',
  // パーサのオプション
  parserOptions: {
    project: true, // プロジェクト全体の設定を有効にする
    tsconfigRootDir: __dirname, // tsconfig.jsonのルートディレクトリ
  },
  // ルート設定
  root: true,
  // 設定の追加
  settings: {
    tailwindcss: {
      callees: ['cn'], // Tailwind CSSクラス名の検出関数
      config: 'tailwind.config.ts', // Tailwind CSSの設定ファイル
    },
  },
  // ルールの指定
  rules: {
    'import/order': [
      // インポートの順序ルール
      'error', // エラーレベル
      {
        pathGroups: [
          // パスグループ
          {
            pattern: '@/**', // 特定のパスパターン
            group: 'internal', // 内部モジュールとしてグループ化
          },
        ],
        groups: [
          // グループ設定
          'builtin', // 組み込みモジュール
          'external', // 外部モジュール
          'internal', // 内部モジュール
          'parent', // 親ディレクトリからのインポート
          'sibling', // 同一ディレクトリからのインポート
          'index', // インデックスファイルからのインポート
          'object', // オブジェクトスタイルのインポート
        ],
        'newlines-between': 'always', // 各グループ間に常に改行を挿入
      },
    ],
  },
  // ファイルの特定の設定の上書き
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'], // 型チェックを無効にしたTypeScript ESLint設定を拡張
      files: ['./**/*.{js,cjs,mjs}'], // 対象ファイルのパターン
    },
  ],
};
