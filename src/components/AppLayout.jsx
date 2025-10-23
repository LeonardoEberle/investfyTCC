import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import styled, { keyframes } from 'styled-components'

const moveGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const MainContainer = styled.div`
  padding-top: 64px; 
`

const ContentArea = styled.main`
  min-height: calc(100vh - 64px); 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  padding: 40px 0; 
  
  background: linear-gradient(
    -45deg, 
    #0f172a, /* slate-900 */
    #111827, /* gray-900 */
    #1e293b, /* slate-800 */
    #282157  /* Roxo bem escuro e sutil */
  );
  background-size: 400% 400%;
  animation: ${moveGradient} 15s ease infinite;
`

export default function AppLayout() {
  return (
    <MainContainer>
      <NavBar />
      <ContentArea>
        <Outlet /> 
      </ContentArea>
    </MainContainer>
  )
}