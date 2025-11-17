import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './containers/Login'
import Register from './containers/Register'
import Home from './containers/Home'
import Profile from './containers/Profile'
import AppLayout from './components/AppLayout'
import Startups from './containers/Startups'
import MinhasStartups from './containers/MinhasStartups'
import GerenciarStartup from './containers/GerenciarStartup'
import DetalheStartup from './containers/DetalheStartup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Rotas com layout compartilhado (NavBar) */}
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/startups/:id" element={<DetalheStartup />} />
          <Route path="/minhas-startups" element={<MinhasStartups />} />
          <Route path="/minhas-startups/gerenciar" element={<GerenciarStartup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App