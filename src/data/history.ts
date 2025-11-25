/**
 * 更新履歴の情報
 */
export interface HistoryItem {
    date: string; // 更新日
    description: string; // 更新内容
}

export const historyData: HistoryItem[] = [
    // 追加する場合はこちらに追加
    { date: '2025-11-xx', description: 'サイト公開しました🎉'},
];
