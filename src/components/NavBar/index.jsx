import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Bar, Logo, Actions, Button } from './styles'

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <Bar>
      <Logo onClick={() => navigate('/home')} aria-label="Ir para Home">Investfy</Logo>
      <Actions>
        <Button onClick={() => navigate('/profile')}>Perfil</Button>
        <Button $variant="danger" onClick={() => navigate('/login')}>Sair</Button>
      </Actions>
    </Bar>
  )
}