import { useLocation, useOutletContext } from "react-router-dom";

export function ProductDetails() {
  const { state } = useLocation();
  const product = state?.product;
  const { cartItemCount, setCartItemCount } = useOutletContext();

  const addToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <>
      {console.log(product)}
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
    </>
  );
}
