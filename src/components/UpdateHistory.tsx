import { memo } from 'react';
import { historyData } from '@/data/history';
import styles from './UpdateHistory.module.css';

/**
 * 更新履歴コンポーネント
 */
export const UpdateHistory = memo(() => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>更新履歴</h2>

      {/* リストで更新履歴を並べる */}
      <ul className={styles.list}>
        {historyData.map((item, index) => (
          <li key={index} className={styles.item}>
            <time className={styles.date}>{item.date}</time>
            <span className={styles.description}>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

UpdateHistory.displayName = 'UpdateHistory';