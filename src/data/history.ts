/**
 * 更新履歴の情報
 */
export interface HistoryItem {
  date: string; // 更新日
  description: string; // 更新内容
}

export const historyData: HistoryItem[] = [
  // 追加する場合はこちらに追加
  {
    date: "2026-06-03",
    description: "あいうえお打(タイピングゲーム)を公開！",
  },
  {
    date: "2026-01-08",
    description: "自分のアイコンを変更しました",
  },
  { date: "2025-12-11", description: "サイト公開しました🎉" },
];
