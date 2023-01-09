import Link from "next/link";
import styles from "src/component/Button/index.module.scss";

type Props = {
  center?: boolean;
  href: string;
  left?: boolean;
  right?: boolean;
  text: string;
};

export const ButtonNormal = ({
  center = false,
  href,
  left = false,
  right = false,
  text,
}: Props) => {
  return (
    <div
      className={
        left ? styles.left : center ? styles.center : right ? styles.right : ""
      }
    >
      <Link href={href} className={styles.button}>
        {text}
      </Link>
    </div>
  );
};
