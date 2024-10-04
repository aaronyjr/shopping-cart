import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

export function Header({ cartItemCount }) {
  Header.propTypes = {
    cartItemCount: PropTypes.number.isRequired,
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>
      <div className={styles.searchButton}>Search button</div>
      <div className={styles.cartButton}>
        <Link to="cart">Cart button</Link>
      </div>
      <p>{cartItemCount}</p>
    </div>
  );
}
