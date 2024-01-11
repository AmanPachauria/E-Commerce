import React from 'react'
import Home from './pages/Home'
import Appbar from './components/Appbar'
import Checkout from './pages/Checkout'
import ShoppingCart from './pages/ShoppingCart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
       <Appbar />
       <Routes>
           <Route path={"/"} element={<Home />} />
           <Route path={"/checkout"} element={<Checkout/>} />
           <Route path={"/shopping-cart"} element={<ShoppingCart/>} />
       </Routes>
    </BrowserRouter>
  )
}
