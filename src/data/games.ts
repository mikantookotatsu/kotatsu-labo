/**
 * ゲーム情報
 */
export interface GameInfo {
  id: string; // ゲームの識別ID
  title: string; // ゲームのタイトル
  genre: string; // ゲームのジャンル
  description: string; // ゲームの説明
  wasmPath: string; // WebAssemblyファイルのパス
  thumbnailPath: string; // サムネイル画像のパス
  controls: GameControl[]; // 操作方法の説明
  releaseDate: string; // リリース日
  width: number; // ゲーム画面の本来の幅(px)
  height: number; // ゲーム画面の本来の高さ(px)
}

export interface GameControl {
  key: string; // キー名（例: "Space", "↑ボタン"）
  action: string; // アクション（例: "ジャンプ"）
}

/* ゲームデータ */
export const gamesData: GameInfo[] = [
  {
    id: "hi-and-low",
    title: "HI&LOW",
    genre: "Mini Game",
    description:
      "レトロすぎるHI&LOWゲーム。ドラクエカジノのダブルアップをイメージして作成しました",
    wasmPath: "hi-low-game.wasm",
    thumbnailPath: "hi-low-game.png",
    controls: [
      { key: "H Key", action: "次は高い" },
      { key: "L Key", action: "次は低い" },
      { key: "S Key", action: "次は同じ" },
      { key: "W Key", action: "カードを透視" },
      { key: "R Key", action: "リセット" },
    ],
    releaseDate: "2025-11-28",
    width: 800,
    height: 600,
  },
  {
    id: "aioueo-typing",
    title: "あいうえお打",
    genre: "Typing Game",
    description:
      '"あいうえお"から順に50音を高速にタイピングするゲームです。最高の称号を目指せ！',
    wasmPath: "aiueo-typing-game.wasm",
    thumbnailPath: "aiueo-typing-game.png",
    controls: [
      { key: "S Key", action: "設定画面" },
      { key: "T Key", action: "称号確認" },
      { key: "A Key", action: "開始" },
      { key: "Esc", action: "リセット" },
    ],
    releaseDate: "2026-06-03",
    width: 640,
    height: 480,
  },
];
