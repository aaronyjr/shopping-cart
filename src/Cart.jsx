import { useContext } from "react";
import { CartContext } from "./CartContext";

export function Cart() {
  const { cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const calculateItemTotal = (item) => {
    return (item.product.price * item.quantity).toFixed(2);
  };

  const calculateCartTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>                    <img
                      src={`/img/suits/${item.product.image}`}
                      alt={item.product.name}
                      className="cart-image"
                    />
                    {item.product.name} - Size: {item.size}</td>

                  <td>${item.product.price.toFixed(2)}</td>
                  <td>
                    <button onClick={() => decreaseQuantity(item.product.id, item.size)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.product.id, item.size)}>+</button>
                  </td>
                  <td>${calculateItemTotal(item)}</td>
                  <td>
                    <button onClick={() => removeItemFromCart(item.product.id, item.size)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <h3>Cart Total: ${calculateCartTotal()}</h3>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
