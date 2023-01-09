import styles from "src/pages-layout/Footer/index.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_copy}>
        <small lang="en" translate="no">
          &copy; 2023 template inc.
        </small>
      </p>
    </footer>
  );
};
