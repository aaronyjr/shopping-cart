import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProductPage() {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, {state: {product}})
  }

  return (
    <div>
      {products ? (
        products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt="" />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <p>product page</p>
    </div>
  );
}
