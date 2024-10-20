import { useLocation, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext";
import { products as productData } from "../data/Products";

export function ProductDetails() {
  const [size, setSize] = useState("S");
  const { state } = useLocation();
  const { addItemToCart } = useContext(CartContext)
  const productSizes = ["S", "M", "L", "XL"];
  const { productId } = useParams();
  const product = state?.product || productData.find((p) => p.id === parseInt(productId));
  
  useEffect(() => {
    if (product?.name) {
      document.title = product.name.toUpperCase();
    }

    return () => {
      document.title = "Suit Savvy";
    };
  }, [product?.name]);

  const handleAddToCart = () => {
    addItemToCart(product, size);
  };

  const selectSize = (size) => {
    setSize(size);
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.left}>
        <img src={`/img/suits/${product.image}`} alt={product.name} />
      </div>
      <div className={styles.right}>
        <p>{product.name.toUpperCase()}</p>
        <p>{"$" + product.price}</p>
        <br />
        <p>{product.description}</p>
        <div className={styles.sizeSelector}>
          <br />
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
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}
