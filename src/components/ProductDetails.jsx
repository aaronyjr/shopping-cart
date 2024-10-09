import { useLocation, useOutletContext } from "react-router-dom";
import styles from "./ProductDetails.module.css";

export function ProductDetails() {
  const { state } = useLocation();
  const product = state?.product;
  const gender = state?.gender;
  const { cartItemCount, setCartItemCount } = useOutletContext();

  const addToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.left}>
        <img src={`/img/${gender}/${product.image}`} alt={product.name} />
      </div>
      <div className={styles.right}>
        <p>{product.name}</p>
        <p>{"$" + product.price}</p>
        <br />
        <p>{product.description}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}
