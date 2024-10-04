import { useLocation, useOutletContext} from "react-router-dom";

export function ProductDetails() {
  const { state } = useLocation();
  const product = state?.product;
  const { cartItemCount, setCartItemCount } = useOutletContext();

  const addToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <>
      <p>{product.title}</p>
      <button onClick={addToCart}>Add to cart</button>
    </>
  );
}
