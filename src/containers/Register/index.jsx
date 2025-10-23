import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import AuthLayout from '../../components/Auth/AuthLayout'
import {
  Card,
  LogoWrapper,
  LogoImage,
  Title,
  Form,
  InputWrapper,
  Input,
  IconStyle,
  IconStyleRight,
  Button,
  Helper,
  ErrorText,
  StyledLink,
} from '../../components/Auth/AuthStyles'

import logoAsset from '../../assets/logo.png' 

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

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
    <AuthLayout>
      <Card>
        <LogoWrapper>
          <LogoImage src={logoAsset} alt="Investify Logo" />
        </LogoWrapper>

        <Title>Crie sua conta</Title>
        
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input 
              type="text" 
              name="name" 
              placeholder="Nome" 
              value={form.name} 
              onChange={handleChange} 
            />
            <IconStyle>
              <HiOutlineUser size={20} />
            </IconStyle>
          </InputWrapper>

          <InputWrapper>
            <Input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={form.email} 
              onChange={handleChange} 
            />
            <IconStyle>
              <HiOutlineMail size={20} />
            </IconStyle>
          </InputWrapper>

          <InputWrapper>
            <Input 
              type={showPassword ? 'text' : 'password'} 
              name="password" 
              placeholder="Senha" 
              value={form.password} 
              onChange={handleChange} 
            />
            <IconStyle>
              <HiOutlineLockClosed size={20} />
            </IconStyle>
            <IconStyleRight onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <HiOutlineEye size={20} /> : <HiOutlineEyeOff size={20} />}
            </IconStyleRight>
          </InputWrapper>

          <InputWrapper>
            <Input 
              type={showConfirm ? 'text' : 'password'} 
              name="confirm" 
              placeholder="Confirmar senha" 
              value={form.confirm} 
              onChange={handleChange} 
            />
            <IconStyle>
              <HiOutlineLockClosed size={20} />
            </IconStyle>
            <IconStyleRight onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <HiOutlineEye size={20} /> : <HiOutlineEyeOff size={20} />}
            </IconStyleRight>
          </InputWrapper>

          {error && <ErrorText>{error}</ErrorText>}
          
          <Button type="submit">Cadastrar</Button>
        </Form>
        
        <Helper>
          Já possui uma conta?{' '}
          <StyledLink to="/login">Entrar</StyledLink>
        </Helper>
      </Card>
    </AuthLayout>
  )
}