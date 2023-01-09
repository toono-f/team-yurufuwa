import styles from "src/pages-layout/Layout/index.module.scss";
import { PropsChildren } from "src/types";

import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = ({ children }: PropsChildren) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
