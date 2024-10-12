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
    const newCartItems = cartItems.filter(
      (item) => !(item.product.id === productId && item.size === size)
    );
    setCartItems(newCartItems);
  };

  const increaseQuantity = (productId, size) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId, size) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.product.id === productId && item.size === size) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
