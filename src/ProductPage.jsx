import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products as productData } from "./data/Products";
import PropTypes from "prop-types";

ProductPage.propTypes = {
  gender: PropTypes.string.isRequired,
};

export function ProductPage({ gender }) {
  const [products, setProducts] = useState(productData);
  const navigate = useNavigate();
  console.log('wtf"?');
  console.log(products);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => console.log("Error fetching data", error));
  // }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product, gender } });
  };

  return (
    <div>
      {products ? (
        products
          .filter((product) =>
            product.category.toLowerCase().includes(gender.toLowerCase())
          )
          .map((product) => (
            <div key={product.id} onClick={() => handleProductClick(product)}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <img src={`/img/${gender}/${product.image}`} alt={product.name} />
            </div>
          ))
      ) : (
        <p>Loading...</p>
      )}
      <p>product page</p>
    </div>
  );
}
