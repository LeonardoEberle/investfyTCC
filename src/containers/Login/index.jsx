import React, { useState } from 'react'
import { Container, Card, Title, Form, Input, Button, Helper, ErrorText } from './styles'
import { Link } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!form.email || !form.password) {
      setError('Preencha email e senha.')
      return
    }
    console.log('Login:', form)
    alert('Login realizado (mock).')
  }

  return (
    <Container>
      <Card>
        <Title>Entrar</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <Input type="password" name="password" placeholder="Senha" value={form.password} onChange={handleChange} />
          {error && <ErrorText>{error}</ErrorText>}
          <Button type="submit">Login</Button>
        </Form>
        <Helper>
          Não tem conta? <Link to="/register">Cadastre-se</Link>
        </Helper>
      </Card>
    </Container>
  )
}