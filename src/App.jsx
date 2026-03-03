import { useState } from 'react'
import Home from './components/homepage'
import Shop from './components/shop'
import ProductPage from './components/products'
import Roster from './pages/roster'
import Layout from './components/layout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Merch from './pages/merch'
import Contactus from './pages/contactus'
import Aboutus from './pages/aboutus'
import Games from './pages/games'
import Programs from './pages/programs'
import Gallery from './pages/gallery'
import Blog from './pages/blog'
import Easter from './pages/easter'

// Admin Imports
import AdminLayout from './admin/layout/AdminLayout'
import Dashboard from './admin/pages/Dashboard'
import ProductsList from './admin/pages/ecommerce/ProductsList'
import ProductForm from './admin/pages/ecommerce/ProductForm'
import Banners from './admin/pages/media/Banners'
import ProgramsList from './admin/pages/media/ProgramsList'
import ProgramForm from './admin/pages/media/ProgramForm'
import PlayersList from './admin/pages/sports/PlayersList'
import PlayerForm from './admin/pages/sports/PlayerForm'
import TeamsList from './admin/pages/sports/TeamsList'
import GamesList from './admin/pages/sports/GamesList'
import GameForm from './admin/pages/sports/GameForm'
import { AuthProvider } from './admin/hooks/useAdminAuth'
import { ProtectedRoute } from './admin/components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/games" element={<Games />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<Gallery />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/roster" element={<Roster />} />
      </Route>
      <Route path="/easter" element={<Easter />} />

      {/* Admin Routes with AuthProvider wrapper */}
      <Route path="/admin" element={
        <AuthProvider>
          <AdminLayout />
        </AuthProvider>
      }>
        <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="ecommerce/products" element={<ProtectedRoute><ProductsList /></ProtectedRoute>} />
        <Route path="ecommerce/products/new" element={<ProtectedRoute><ProductForm /></ProtectedRoute>} />
        <Route path="media/banners" element={<ProtectedRoute><Banners /></ProtectedRoute>} />
        <Route path="media/programs" element={<ProtectedRoute><ProgramsList /></ProtectedRoute>} />
        <Route path="media/programs/new" element={<ProtectedRoute><ProgramForm /></ProtectedRoute>} />
        <Route path="media/programs/edit/:id" element={<ProtectedRoute><ProgramForm /></ProtectedRoute>} />

        {/* Sports Routes */}
        <Route path="sports/players" element={<ProtectedRoute><PlayersList /></ProtectedRoute>} />
        <Route path="sports/players/new" element={<ProtectedRoute><PlayerForm /></ProtectedRoute>} />
        <Route path="sports/players/edit/:id" element={<ProtectedRoute><PlayerForm /></ProtectedRoute>} />
        <Route path="sports/teams" element={<ProtectedRoute><TeamsList /></ProtectedRoute>} />
        <Route path="sports/games" element={<ProtectedRoute><GamesList /></ProtectedRoute>} />
        <Route path="sports/games/new" element={<ProtectedRoute><GameForm /></ProtectedRoute>} />
        <Route path="sports/games/edit/:id" element={<ProtectedRoute><GameForm /></ProtectedRoute>} />

        {/* Placeholder catch-all for other admin routes during MVP */}
        <Route path="*" element={
          <ProtectedRoute>
            <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg bg-white">
              <div className="text-center">
                <h3 className="mt-2 text-sm font-semibold text-gray-900">Coming Soon</h3>
                <p className="mt-1 text-sm text-gray-500">This module is under development.</p>
              </div>
            </div>
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  )
}

export default App
