import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Bar, LogoImage, Actions, Button, Divider } from './styles'
import { 
  HiOutlineChartPie, 
  HiOutlineBriefcase, 
  HiOutlineRss, 
  HiOutlineBell, 
  HiOutlineUser, 
  HiOutlineLogout 
} from 'react-icons/hi'

import logoAsset from '../../assets/logo.png' 

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <Bar>
      <LogoImage 
        src={logoAsset} 
        alt="Investify Logo" 
        onClick={() => navigate('/home')} 
        aria-label="Ir para Home"
      />
      <Actions>
        <Button 
          $variant="primary" 
          onClick={() => alert('Em breve: Minha carteira')} 
          aria-label="Minha carteira"
        >
          <HiOutlineChartPie size={18} />
          Minha carteira
        </Button>
        <Button 
          onClick={() => alert('Em breve: Meus investimentos')} 
          aria-label="Meus investimentos"
        >
          <HiOutlineBriefcase size={18} />
          Meus investimentos
        </Button>
        <Button 
          onClick={() => alert('Em breve: Feed')} 
          aria-label="Feed"
        >
          <HiOutlineRss size={18} />
          Feed
        </Button>
        
        <Divider />
        
        <Button 
          onClick={() => alert('Em breve: Notificações')} 
          aria-label="Notificações"
          title="Notificações"
        >
          <HiOutlineBell size={18} />
          Notificações
        </Button>
        
        <Button 
          onClick={() => navigate('/profile')}
          aria-label="Perfil"
          title="Perfil"
        >
          <HiOutlineUser size={18} />
          Perfil
        </Button>
        
        <Divider />
        
        <Button 
          $variant="danger" 
          onClick={() => navigate('/login')}
          title="Sair"
        >
          <HiOutlineLogout size={18} />
          Sair
        </Button>
      </Actions>
    </Bar>
  )
}