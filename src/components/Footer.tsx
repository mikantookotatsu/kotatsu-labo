import { memo } from 'react';
import styles from './Footer.module.css';

/**
 * フッターコンポーネント
 * バージョン情報とコピーライトを表示
 */
export const Footer = memo(() => {
  const currentYear = new Date().getFullYear(); // 年取得
  const version = import.meta.env.VITE_APP_VERSION; // 環境変数からバージョン情報

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {currentYear} {import.meta.env.VITE_APP_AUTHOR}
      </p>
      {version && (
        <p className={styles.version}>
          Version {version}
        </p>
      )}
    </footer>
  );
});

Footer.displayName = 'Footer';