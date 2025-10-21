import React, { useState } from 'react'
import { Container, Card, Title, Form, Input, Textarea, Button } from './styles'

export default function Profile() {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    nascimento: '',
    codigoPostal: '',
    telefone: '',
    sobreMim: '',
    cpf: '',
    rg: ''
  })

  const formatDateDDMMYYYY = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 8)
    const dd = digits.slice(0, 2)
    const mm = digits.slice(2, 4)
    const yyyy = digits.slice(4, 8)
    let result = ''
    if (dd) result = dd
    if (mm) result += '/' + mm
    if (yyyy) result += '/' + yyyy
    return result
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'nascimento') {
      setForm((prev) => ({ ...prev, nascimento: formatDateDDMMYYYY(value) }))
      return
    }
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Editar perfil:', form)
    alert('Formulário enviado para edição.')
  }

  return (
    <Container>
      <Card>
        <Title>Perfil</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} autoComplete="given-name" />
          <Input type="text" name="sobrenome" placeholder="Sobrenome" value={form.sobrenome} onChange={handleChange} autoComplete="family-name" />
          <Input type="text" name="nascimento" placeholder="Data de nascimento (dd/mm/yyyy)" value={form.nascimento} onChange={handleChange} inputMode="numeric" autoComplete="bday" pattern="^\\d{2}/\\d{2}/\\d{4}$" title="Formato dd/mm/yyyy" />
          <Input type="text" name="codigoPostal" placeholder="Código postal" value={form.codigoPostal} onChange={handleChange} autoComplete="postal-code" />
          <Input type="tel" name="telefone" placeholder="Número de telefone" value={form.telefone} onChange={handleChange} autoComplete="tel" />
          <Textarea name="sobreMim" placeholder="Sobre mim" value={form.sobreMim} onChange={handleChange} autoComplete="off" />
          <Input type="text" name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} inputMode="numeric" autoComplete="off" />
          <Input type="text" name="rg" placeholder="RG" value={form.rg} onChange={handleChange} inputMode="numeric" autoComplete="off" />
          <Button type="submit">Editar</Button>
        </Form>
      </Card>
    </Container>
  )
}