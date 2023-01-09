import { ReactNode } from "react";
import styles from "src/pages-layout/Mv/index.module.scss";

type Props = {
  children: ReactNode;
  index?: boolean;
};

export const Mv = ({ children, index = false }: Props) => {
  return <div className={index ? styles.index : styles.lower}>{children}</div>;
};
