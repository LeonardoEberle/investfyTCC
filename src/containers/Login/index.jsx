import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
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

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

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
    navigate('/home')
  }

  return (
    <AuthLayout>
      <Card>
        <LogoWrapper>
          <LogoImage src={logoAsset} alt="Investify Logo" />
        </LogoWrapper>
        <Title>Bem-vindo de volta!</Title>
        
        <Form onSubmit={handleSubmit}>
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

          {error && <ErrorText>{error}</ErrorText>}
          <Button type="submit">Entrar</Button>
        </Form>
        
        <Helper>
          Não possui uma conta ainda?{' '}
          <StyledLink to="/register">Cadastre-se</StyledLink>
        </Helper>
      </Card>
    </AuthLayout>
  )
}