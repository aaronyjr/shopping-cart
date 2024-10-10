import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { CartProvider } from "./CartContext";

function App() {
  // declare cart count state
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <CartProvider>
      <Header cartItemCount={cartItemCount} />
      <Navbar />
      <Outlet context={{ cartItemCount, setCartItemCount }} />
    </CartProvider>
  );
}

export default App;
