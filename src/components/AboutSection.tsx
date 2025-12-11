import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import avatarImg from "@/assets/avatar.png";
import styles from "./AboutSection.module.css";

/**
 * About コンポーネント
 * このサイトについて
 */
export const AboutSection = memo(() => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>このサイトについて</h2>

      <div className={styles.content}>
        <p className={styles.description}>
          K-Labo(こたつラボの略)は、ミカンとこたつが好き(ｱﾗﾌｫｰ)による個人学習のサイトです。
          ゲームを公開したり、学習成果をアップしたいと考えています。このサイトもReact+TypeScriptの学習で作成しています。
        </p>

        <div className={styles.adminInfo}>
          <h3 className={styles.subtitle}>作者情報</h3>

          <div className={styles.profile}>
            {/* アイコン */}
            <img
              src={avatarImg}
              alt="管理人のアイコン"
              className={styles.avatar}
            />

            <div className={styles.details}>
              <dl className={styles.infoList}>
                <dt className={styles.infoLabel}>名前</dt>
                <dd className={styles.infoValue}>ミカンとこたつが好き</dd>

                <dt className={styles.infoLabel}>スキル</dt>
                <dd className={styles.infoValue}>
                  C,C++,Java(old),ExcelVBA,sh等レガシーな業務経験が主体。現在はGolangやWeb系も学習中
                </dd>

                <dt className={styles.infoLabel}>一言</dt>
                <dd className={styles.infoValue}>
                  ｱﾗﾌｫｰながらまだまだ知識吸収中です。お仕事募集中(!?)
                </dd>
              </dl>

              {/* SNSリンク */}
              <div className={styles.links}>
                <a
                  href="https://github.com/mikantookotatsu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label="GitHubへのリンク"
                >
                  <FaGithub className={styles.icon} />
                  GitHub
                </a>

                <a
                  href="https://note.com/mikantookotasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label="noteへのリンク"
                >
                  <IoDocumentText className={styles.icon} />
                  note
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
