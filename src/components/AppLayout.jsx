import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import styled from 'styled-components'

const Content = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px; /* evita sobreposição abaixo da NavBar fixa */
  background: #0f172a;
`

export default function AppLayout() {
  return (
    <div>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}