// CartContext.js
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product, size) => {
    const existingProduct = cartItems.find(
      (item) => item.product.id === product.id && item.size === size
    );

    if (existingProduct) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { product, size, quantity: 1 }]);
    }
    console.log(cartItems);
  };

  const removeItemFromCart = (productId, size) => {

  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
