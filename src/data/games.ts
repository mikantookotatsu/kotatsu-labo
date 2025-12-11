/**
 * ゲーム情報
 */
export interface GameInfo {
  id: string; // ゲームの識別ID
  title: string; // ゲームのタイトル
  description: string; // ゲームの説明
  wasmPath: string; // WebAssemblyファイルのパス
  thumbnailPath: string; // サムネイル画像のパス
  controls: GameControl[]; // 操作方法の説明
  releaseDate: string; // リリース日
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
    description:
      "kotatsu-laboで最初に作成したHI&LOWゲームです。ドラクエカジノのダブルアップをイメージして作りました。平成の見た目！",
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
  },
];
