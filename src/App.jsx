import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState(null);
  if (products) {
    console.log(typeof products[0]);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const array = data.map((product) => Object.values(product));
        setProducts(array);
      })
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
