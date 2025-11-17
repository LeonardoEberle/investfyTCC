import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bar, LogoImage, Actions, Button, Divider, NotifyWrapper, DropdownCard, ModalHeader, ModalTitle, CloseButton, NotificationsList, NotificationItem, NotificationText } from './styles'
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
  const [openNotifications, setOpenNotifications] = useState(false)
  const notifyRef = useRef(null)

  useEffect(() => {
    if (!openNotifications) return
    const handler = (e) => {
      if (notifyRef.current && !notifyRef.current.contains(e.target)) {
        setOpenNotifications(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [openNotifications])
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
          onClick={() => navigate('/startups')} 
          aria-label="Startups"
        >
          <HiOutlineChartPie size={18} />
          Startups
        </Button>
        <Button 
          onClick={() => navigate('/minhas-startups')} 
          aria-label="Minhas startups"
        >
          <HiOutlineBriefcase size={18} />
          Minhas startups
        </Button>
        <Button 
          onClick={() => navigate('/home')} 
          aria-label="Dashboard"
        >
          <HiOutlineRss size={18} />
          Dashboard
        </Button>
        
        <Divider />
        
        <NotifyWrapper ref={notifyRef}>
          <Button 
            onClick={() => setOpenNotifications((v) => !v)} 
            aria-label="Notificações"
            title="Notificações"
          >
            <HiOutlineBell size={18} />
            Notificações
          </Button>
          {openNotifications && (
            <DropdownCard role="dialog" aria-modal="true" aria-labelledby="notificacoes-title">
              <ModalHeader>
                <ModalTitle id="notificacoes-title">Notificações</ModalTitle>
                <CloseButton aria-label="Fechar" onClick={() => setOpenNotifications(false)}>×</CloseButton>
              </ModalHeader>
              <NotificationsList>
                <NotificationItem>
                  <HiOutlineBell size={18} />
                  <NotificationText>Sua Proposta para startup X foi recusada</NotificationText>
                </NotificationItem>
              </NotificationsList>
            </DropdownCard>
          )}
        </NotifyWrapper>
        
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