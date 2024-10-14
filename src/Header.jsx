import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

export function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/"><img src="../public/s-logo.svg" alt="Logo" /></Link>
      </div>
      <div
        className={styles.cartButton}
        data-count={cartItems.length}
      >
        <Link to="/cart">
          <i className={`fas fa-shopping-cart ${styles.cartIcon}`}></i> {/* Cart icon */}
        </Link>
      </div>
    </div>
  );
}
