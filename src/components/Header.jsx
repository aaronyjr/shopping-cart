import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <div className={styles.logoContainer}>
            <img
              src="/suit-logo-no-bg.png"
              alt="Logo"
              className={styles.logoImage}
            />
          </div>
        </Link>
      </div>

      <div className={styles.cartButton} data-count={cartItems.length}>
        <Link to="/cart">
          <i className={`fas fa-shopping-cart ${styles.cartIcon}`}></i>
        </Link>
      </div>
    </div>
  );
}
