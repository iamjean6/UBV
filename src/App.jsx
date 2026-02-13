import { useState } from 'react'
import Home from './components/homepage'
import Shop from './components/shop'
import ProductPage from './components/products'
import Roster from './pages/roster'
import Layout from './components/layout'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
function App() {
  

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/roster" element={<Roster />} />
      </Route>
    </Routes>
    
  )
}

export default App
