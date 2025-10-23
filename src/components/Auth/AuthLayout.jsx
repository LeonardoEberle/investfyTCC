import React from 'react'
import { Container, GlobalStyle } from './AuthStyles'

export default function AuthLayout({ children }) {
  return (
    <Container>
      <GlobalStyle />
      {children}
    </Container>
  )
}