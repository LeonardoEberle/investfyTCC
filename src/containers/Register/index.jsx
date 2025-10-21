import React, { useState } from 'react'
import { Container, Card, Title, Form, Input, Button, Helper, ErrorText } from './styles'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError('Preencha todos os campos.')
      return
    }
    if (form.password !== form.confirm) {
      setError('As senhas não coincidem.')
      return
    }
    console.log('Cadastro:', form)
    alert('Cadastro realizado.')
    navigate('/login')
  }

  return (
    <Container>
      <Card>
        <Title>Cadastrar</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Nome" value={form.name} onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <Input type="password" name="password" placeholder="Senha" value={form.password} onChange={handleChange} />
          <Input type="password" name="confirm" placeholder="Confirmar senha" value={form.confirm} onChange={handleChange} />
          {error && <ErrorText>{error}</ErrorText>}
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Helper>
          Já possui uma conta? <Link to="/login">Entrar</Link>
        </Helper>
      </Card>
    </Container>
  )
}