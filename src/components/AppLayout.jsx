import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import styled, { createGlobalStyle, keyframes } from 'styled-components'

/*
  ADICIONAMOS O GLOBALSTYLE AQUI (com a fonte Inter)
  Ele estava antes no AuthStyles, e por isso não funcionava no App
*/
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                 Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #1a202c; /* Texto escuro por padrão */
  }
`

/* Removemos a animação e o gradiente escuro */
const MainContainer = styled.div`
  padding-top: 64px; 
`

/*
  MUDANÇA PRINCIPAL:
  Fundo claro e profissional, em vez do gradiente escuro.
*/
const ContentArea = styled.main`
  min-height: calc(100vh - 64px); 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  padding: 40px; /* Mais padding */
  
  /* Este é o novo fundo "claro" */
  background: #f0f2f5;
`

export default function AppLayout() {
  return (
    <MainContainer>
      <GlobalStyle /> {/* Aplicando o estilo global aqui */}
      <NavBar />
      <ContentArea>
        <Outlet /> 
      </ContentArea>
    </MainContainer>
  )
}