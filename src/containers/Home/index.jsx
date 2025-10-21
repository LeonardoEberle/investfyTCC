import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Card, Title, Text, Actions, Button } from './styles'

export default function Home() {
  const navigate = useNavigate()
  return (
    <Container>
      <Card>
        <Title>Home</Title>
        <Text>Bem-vindo à página inicial.</Text>
        <Actions>
          <Button onClick={() => navigate('/profile')}>Perfil</Button>
          <Button $variant="danger" onClick={() => navigate('/login')}>Sair</Button>
        </Actions>
      </Card>
    </Container>
  )
}