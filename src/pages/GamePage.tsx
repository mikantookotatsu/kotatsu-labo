import { Layout } from '@components/Layout/Layout';
import hiAndLowImg from '@/assets/games-img/hi-and-low.png';
import styles from './GamePage.module.css';

export function GamePage() {
  return (
    <Layout>
      <h1 className={styles.title}>
        作成したGameの一覧
      </h1>
      
      <div className={styles.gameGrid}>
        {/* ゲーム一覧 */}
        <article className={styles.gameCard}>
          <h2 className={styles.gameTitle}>HI&LOW</h2>
          <img 
            src={hiAndLowImg}
            alt="HI&LOWゲームのサムネイル画像" 
            className={styles.gameImage}
          />
          <div className={styles.gameInfo}>
            <p className={styles.gameDescription}>
              K-laboで最初に作成したHI&LOWゲームです。ドラクエカジノのダブルアップをイメージして作りました。平成の見た目！
            </p>
            <p>
              #Golang(Ebitengine)
            </p>
            <a href="#" className={styles.playButton}>
              Let's Play!
            </a>
          </div>
        </article>

        <article className={styles.gameCard}>
          <h2 className={styles.gameTitle}>Comming Soon...</h2>
          <div className={styles.gameInfo}>
            <p className={styles.gameDescription}>
              製作中!!
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}