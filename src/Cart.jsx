import { useContext } from "react";
import { CartContext } from "./CartContext";

export function Cart() {
  const { cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.product.name} - Size: {item.size}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => decreaseQuantity(item.product.id, item.size)}>-</button>
            <button onClick={() => increaseQuantity(item.product.id, item.size)}>+</button>
            <button onClick={() => removeItemFromCart(item.product.id, item.size)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
