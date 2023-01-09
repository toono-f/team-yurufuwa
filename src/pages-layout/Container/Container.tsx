import { ReactNode } from "react";
import styles from "src/pages-layout/Container/index.module.scss";

type Props = {
  children: ReactNode;
  narrow: boolean;
};

export const Container = ({ children, narrow = false }: Props) => {
  return (
    <div className={narrow ? styles.narrow : styles.default}>{children}</div>
  );
};
