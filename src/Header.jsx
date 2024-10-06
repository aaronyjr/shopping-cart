import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};

export function Header({ cartItemCount }) {
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
