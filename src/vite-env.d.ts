// 環境変数の型定義 .envファイルに合わせて編集する
interface ImportMetaEnv {
  readonly VITE_APP_TITTLE: string;     // タイトル
  readonly VITE_APP_AUTHOR: string;     // 作者
  readonly VITE_APP_VERSION: string;    // バージョン情報
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}