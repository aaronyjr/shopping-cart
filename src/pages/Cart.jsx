import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

  const handleCheckout = () => {
    toast.success("Thank you for trying my app :)!");
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-grid">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={`/img/suits/${item.product.image}`}
                alt={item.product.name}
                className="cart-image"
              />
              <div className="cart-details">
                <p>
                  {item.product.name} - Size: {item.size}
                </p>
                <p>Price: ${item.product.price.toFixed(2)}</p>
              </div>
              <div className="cart-actions">
                <div className="quantity-wrapper">
                  <button
                    onClick={() => decreaseQuantity(item.product.id, item.size)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.product.id, item.size)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="item-total">
                <p>Total: ${calculateItemTotal(item)}</p>
              </div>
              <button
                onClick={() => removeItemFromCart(item.product.id, item.size)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Cart Total: ${calculateCartTotal()}</h3>
          </div>
          <div>
            <button className="checkoutButton" onClick={() => handleCheckout()}>
              Checkout
            </button>
            <ToastContainer />
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
