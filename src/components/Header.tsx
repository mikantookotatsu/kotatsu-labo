import { memo } from 'react';
import logo from '@/assets/logo.png';
import styles from './Header.module.css';

/**
 * ヘッダーコンポーネント
 * アプリケーションのタイトルを表示
 */
export const Header = memo(() => {
  return (
    <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Games</li>
      </ul>
    </header>
  );
});

Header.displayName = 'Header';