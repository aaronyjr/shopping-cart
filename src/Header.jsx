import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export function Header() {
const { cartItems } = useContext(CartContext)

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>
      <div className={styles.searchButton}>Search button</div>
      <div className={styles.cartButton}>
        <Link to="cart">Cart button</Link>
      </div>
      <p>{cartItems.length}</p>
    </div>
  );
}
