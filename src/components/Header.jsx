import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>
      <div className={styles.searchButton}>Search button</div>
      <div className={styles.cartButton}>Cart button</div>
    </div>
  );
}
