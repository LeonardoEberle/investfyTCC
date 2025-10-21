import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './containers/Login'
import Register from './containers/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App