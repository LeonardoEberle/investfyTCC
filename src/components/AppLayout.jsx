import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export default function AppLayout() {
  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: '64px' }}>
        <Outlet />
      </div>
    </div>
  )
}