import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { WasmGame } from "@components/WasmGame";
import { gamesData } from "@/data/games";
import styles from "./GameDetailPage.module.css";

export function GameDetailPage() {
  // URLパラメータからゲームIDを取得
  const { gameId } = useParams<{ gameId: string }>();

  // ゲームデータを検索
  const game = gamesData.find((g) => g.id === gameId);

  // ゲームが見つからない場合はゲーム一覧へリダイレクト
  if (!game) {
    return <Navigate to="/games" replace />;
  }

  return (
    <Layout>
      <article className={styles.container}>
        {/* タイトルエリア */}
        <h1 className={styles.title}>{game.title}</h1>
        <time className={styles.date} dateTime={game.releaseDate}>
          公開日:{" "}
          {new Date(game.releaseDate).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        {/* ゲーム画面 */}
        <section className={styles.gameSection} aria-label="ゲーム画面">
          <WasmGame wasmPath={game.wasmPath} gameId={game.id} />
        </section>

        {/* ゲーム説明 */}
        <section className={styles.descriptionSection}>
          <h2 className={styles.sectionTitle}>ゲーム説明</h2>
          <p className={styles.description}>{game.description}</p>
        </section>

        {/* 操作方法 */}
        <section className={styles.controlsSection}>
          <h2 className={styles.sectionTitle}>操作方法</h2>
          <ul className={styles.controlsList}>
            {game.controls.map((control, index) => (
              <li key={index}>
                <kbd className={styles.key}>{control.key}</kbd>
                {control.action}
              </li>
            ))}
          </ul>
        </section>
      </article>

      {/* 戻るリンク */}
      <div className={styles.backLink}>
        <Link to="/games" className={styles.backButton}>
          ゲーム一覧に戻る
        </Link>
      </div>
    </Layout>
  );
}
