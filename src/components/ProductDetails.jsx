import { useLocation, useOutletContext } from "react-router-dom";

export function ProductDetails() {
  const { state } = useLocation();
  const product = state?.product;
  const gender = state?.gender;
  const { cartItemCount, setCartItemCount } = useOutletContext();

  const addToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <>
      <div>
        <img src={`/img/${gender}/${product.image}`} alt={product.name} />
      </div>
      <div>
        <p>{product.name}</p>
        <p>{"$" + product.price}</p>
        <p>{product.description}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </>
  );
}
