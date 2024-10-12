import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <Navbar />
      <Outlet />
    </CartProvider>
  );
}

export default App;
