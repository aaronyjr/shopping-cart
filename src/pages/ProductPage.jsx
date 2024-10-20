import { Link } from "react-router-dom";
import { products as productData } from "../data/Products";
import PropTypes from "prop-types";
import styles from "./ProductPage.module.css";
import { useState } from "react";

ProductPage.propTypes = {
  gender: PropTypes.string.isRequired,
};

export function ProductPage({ gender }) {
  const [products, setProducts] = useState(productData);

  return (
    <div className={styles.products}>
      {products ? (
        products
          .filter(
            (product) => product.category.toLowerCase() === `${gender}'s suits`
          )
          .map((product) => (
            <Link
              to={`/product/${product.id}`}
              state={{ product, gender }}
              className={styles.productCard}
              key={product.id}
            >
              <div className={styles.left}>
                <img src={`/img/suits/${product.image}`} alt={product.name} />
              </div>
              <div className={styles.right}>
                <p className={styles.productName}>
                  {product.name.toUpperCase()}
                </p>
                <p>{"$" + product.price}</p>
              </div>
            </Link>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
