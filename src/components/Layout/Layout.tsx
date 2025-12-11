import { memo } from "react";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

/**
 * 各ページ共通のレイアウト
 */
export const Layout = memo<LayoutProps>(({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
});

Layout.displayName = "Layout";
