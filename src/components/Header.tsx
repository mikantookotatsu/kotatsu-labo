import { memo } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import styles from './Header.module.css';

/**
 * ヘッダーコンポーネント
 * アプリケーションのタイトルを表示
 */
export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <Link to="/" >
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>

      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="/" className={styles.menuLink}>Home</Link>
          </li>
          <li>
            <Link to="/games" className={styles.menuLink}>Games</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';