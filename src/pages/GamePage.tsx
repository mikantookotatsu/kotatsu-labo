import { Layout } from "@components/Layout/Layout";
import { Link } from "react-router-dom";
import { gamesData } from "@/data/games";
import styles from "./GamePage.module.css";

export function GamePage() {
  return (
    <Layout>
      <h1 className={styles.title}>作成したGameの一覧</h1>

      <div className={styles.gameGrid}>
        {/* ゲーム一覧（カセット風） */}
        {gamesData.map((game) => (
          <article key={game.id} className={styles.gameCard}>
            <div className={styles.cartridgeLabel}>
              {/* カセットの型番風ヘッダー */}
              <div className={styles.labelHeader}>
                <span>{game.genre}</span>
              </div>

              {/* ゲームサムネイル */}
              <img
                src={`/games-img/${game.thumbnailPath}`}
                alt={game.title}
                className={styles.gameImage}
              />

              {/* タイトルと説明 */}
              <h2 className={styles.gameTitle}>{game.title}</h2>
              <p className={styles.gameDescription}>{game.description}</p>

              {/* レトロなプッシュボタン */}
              <Link to={`/games/${game.id}`} className={styles.playButton}>
                ▶ PUSH START
              </Link>
            </div>
          </article>
        ))}

        {/* 開発中カセット（PROTOTYPE風） */}
        <article className={styles.gameCard}>
          <div className={styles.cartridgeLabel}>
            <div className={styles.labelHeader}>
              <span>PROTOTYPE</span>
            </div>
            <div className={styles.comingSoonImage}>
              <span>No Image...</span>
            </div>
            <h2 className={styles.gameTitle}>Coming Soon</h2>
            <p className={styles.gameDescription}>絶賛開発中!?</p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
