import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { useState } from "react";

function App() {
  // declare cart count state
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <>
      <Header cartItemCount={cartItemCount}/>
      <Navbar />
      <Outlet context={{ cartItemCount, setCartItemCount }} />
    </>
  );
}

export default App;
