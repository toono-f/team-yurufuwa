import Link from "next/link";
import styles from "src/pages-layout/Navi/index.module.scss";

export const Navi = () => {
  return (
    <nav className={styles.navi}>
      <ul className={styles.navi_list}>
        <li className={styles.navi_item}>
          <Link href="/" className={styles.navi_link}>
            TOP
          </Link>
        </li>
        <li>
          <Link href="/about/" className={styles.navi_link}>
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};
