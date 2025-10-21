import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Bar, Logo, Actions, Button } from './styles'

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <Bar>
      <Logo onClick={() => navigate('/home')} aria-label="Ir para Home">Investfy</Logo>
      <Actions>
        <Button onClick={() => alert('Em breve: Minha carteira')} aria-label="Minha carteira">Minha carteira</Button>
        <Button onClick={() => alert('Em breve: Meus investimentos')} aria-label="Meus investimentos">Meus investimentos</Button>
        <Button onClick={() => alert('Em breve: Notificações')} aria-label="Notificações">Notificações</Button>
        <Button onClick={() => alert('Em breve: Feed')} aria-label="Feed">Feed</Button>
        <Button onClick={() => navigate('/profile')}>Perfil</Button>
        <Button $variant="danger" onClick={() => navigate('/login')}>Sair</Button>
      </Actions>
    </Bar>
  )
}