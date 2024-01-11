import React from 'react'
import Home from './pages/Home'
import Appbar from './components/Appbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
       <Appbar />
       <Routes>
           <Route path={"home"} element={<Home />} />
       </Routes>
    </BrowserRouter>
  )
}
