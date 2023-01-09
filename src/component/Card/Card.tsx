import Link from "next/link";
import styles from "src/component/Card/index.module.scss";

const ITEM = [
  {
    title: "ITEM1",
    href: "https://www.google.com/",
  },
  {
    title: "ITEM2",
    href: "https://www.google.com/",
  },
  {
    title: "ITEM3",
    href: "https://www.google.com/",
  },
  {
    title: "ITEM4",
    href: "https://www.google.com/",
  },
  {
    title: "ITEM5",
    href: "https://www.google.com/",
  },
  {
    title: "ITEM6",
    href: "https://www.google.com/",
  },
];

export const Card = () => {
  return (
    <ul className={styles.list}>
      {ITEM.map((item, index) => {
        return (
          <li key={index} className={styles.item}>
            <Link href={item.href} target="_blank">
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
