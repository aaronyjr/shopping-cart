import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

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
