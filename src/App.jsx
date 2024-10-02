import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './Header'
import { Navbar } from './Navbar'
import { useState,        useEffect } from 'react'

function App() {

  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  })

  return (
    <>
    <Header />
    <Navbar />
    <Outlet />
    </>
  )
}

export default App
