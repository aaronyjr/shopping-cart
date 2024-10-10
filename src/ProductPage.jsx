import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products as productData } from "./data/Products";
import PropTypes from "prop-types";
import styles from "./ProductPage.module.css";

ProductPage.propTypes = {
  gender: PropTypes.string.isRequired,
};

export function ProductPage({ gender }) {
  const [products, setProducts] = useState(productData);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product, gender } });
  };

  return (
    <div className={styles.products}>
      {products ? (
        products
          .filter(
            (product) => product.category.toLowerCase() === `${gender}'s suits`
          )
          .map((product) => (
            <div
              className={styles.productCard}
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <div className={styles.left}>
                <img
                  src={`/img/${gender}/${product.image}`}
                  alt={product.name}
                />
              </div>
              <div className={styles.right}>
                <p className={styles.productName}>{product.name.toUpperCase()}</p>
                <p>{"$" + product.price}</p>
              </div>
            </div>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
