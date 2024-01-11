import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
       <Routes>
           <Route path={"home"} element={<Home />} />
       </Routes>
    </BrowserRouter>
  )
}
