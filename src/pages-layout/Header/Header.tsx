import Link from "next/link";
import styles from "src/pages-layout/Header/index.module.scss";

import { Navi } from "../Navi";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_in}>
        <Link href="/">ロゴ</Link>
        <Navi />
      </div>
    </header>
  );
};
