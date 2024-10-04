import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
