import Link from "next/link";
import { useState } from "react";
import styles from "src/component/Hamburger/index.module.scss";

export const Hamburger = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <>
      <button
        className={`${styles.hamburger} ${
          navIsOpen ? styles.hamburger_active : ""
        }`}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${styles.navi} ${navIsOpen ? styles.navi_active : ""}`}>
        {navIsOpen && (
          <style jsx global>
            {`
              body {
                overflow: hidden;
              }
            `}
          </style>
        )}
        <ul className={styles.navi_list}>
          <li className={styles.navi_item}>
            <Link href="/" onClick={closeNav}>
              TOP
            </Link>
          </li>
          <li className={styles.navi_item}>
            <Link href="/about" onClick={closeNav}>
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
