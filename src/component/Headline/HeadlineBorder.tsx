import styles from "src/component/Headline/index.module.scss";

type Props = {
  text: string;
};

export const HeadlineBorder = ({ text }: Props) => {
  return <h2 className={styles.border}>{text}</h2>;
};
