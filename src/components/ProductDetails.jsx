import { useLocation, useOutletContext } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { useState } from "react";

export function ProductDetails() {
  const [size, setSize] = useState("S");
  const { state } = useLocation();
  const product = state?.product;
  const gender = state?.gender;
  const { cartItemCount, setCartItemCount } = useOutletContext();
  const productSizes = ["S", "M", "L", "XL"];

  const addToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  const selectSize = (size) => {
    setSize(size);
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
        <div className={styles.sizeSelector}>
          <p>Select Size:</p>
          <div className={styles.sizeOptions}>
            {productSizes.map((productSize) => (
              <button 
              onClick={() => selectSize(productSize)} 
              key={productSize} 
              className={size === productSize ? styles.selectedSize : "" }>
                {productSize}
              </button>
            ))}
          </div>
        </div>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}
