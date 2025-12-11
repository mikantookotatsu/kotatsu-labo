import { Layout } from "@components/Layout/Layout";
import { UpdateHistory } from "@/components/UpdateHistory";
import { AboutSection } from "@/components/AboutSection";
import styles from "./HomePage.module.css";

/**
 * Homeページ
 */
export function HomePage() {
  return (
    <Layout>
      {/* サイト説明 */}
      <h1 className={styles.hero}>
        K-Laboはミカンとこたつが好きな作者のゲーム公開サイト(の予定)
      </h1>

      {/* 更新履歴セクション */}
      <section className={styles.section}>
        <UpdateHistory />
      </section>

      {/* Aboutセクション */}
      <section className={styles.section}>
        <AboutSection />
      </section>
    </Layout>
  );
}
