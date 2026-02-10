import { useState } from 'react'
import Home from './components/homepage'
import Shop from './components/shop'
import ProductPage from './components/products'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
function App() {
  

  return (
  
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductPage />} />
      </Routes>
    
  )
}

export default App
