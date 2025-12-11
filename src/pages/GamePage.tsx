import { Layout } from "@components/Layout/Layout";
import { Link } from "react-router-dom";
import { gamesData } from "@/data/games";
import styles from "./GamePage.module.css";

export function GamePage() {
  return (
    <Layout>
      <h1 className={styles.title}>作成したGameの一覧</h1>

      <div className={styles.gameGrid}>
        {/* ゲーム一覧 */}
        {gamesData.map((game) => (
          <article key={game.id} className={styles.gameCard}>
            <h2 className={styles.gameTitle}>{game.title}</h2>
            <img
              src={`/games-img/${game.thumbnailPath}`}
              alt={game.title}
              className={styles.gameImage}
            />
            <div className={styles.gameInfo}>
              <p className={styles.gameDescription}>{game.description}</p>
              <Link to={`/games/${game.id}`} className={styles.playButton}>
                Let's Play!!
              </Link>
            </div>
          </article>
        ))}

        {/* 最後は製作中としておく */}
        <article className={styles.gameCard}>
          <h2 className={styles.gameTitle}>Comming Soon...</h2>
          <div className={styles.gameInfo}>
            <p className={styles.gameDescription}>製作中!!</p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
