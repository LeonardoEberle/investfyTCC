import styled from 'styled-components'

/* Definindo a paleta de cores do TEMA CLARO 
  para consistência
*/
const colors = {
  text: '#1a202c',
  textMuted: '#5a6472',
  primary: '#3b82f6',
  danger: '#ef4444',
  bg: '#ffffff',
  bgMuted: '#f9fafb',
  border: '#e5e7eb',
  primaryBg: 'rgba(59, 130, 246, 0.1)', // Fundo azul bem claro
  dangerBg: 'rgba(239, 68, 68, 0.1)' // Fundo vermelho bem claro
}

/* BARRA (MODO CLARO)
  Fundo branco, borda inferior e sombra sutil
*/
export const Bar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  background: ${colors.bg};
  border-bottom: 1px solid ${colors.border}; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`

export const LogoImage = styled.img`
  height: 60px;
  width: auto;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

/*
  BOTÕES (MODO CLARO)
  Estilo "Ghost" (só texto)
*/
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px; /* Mais elegante */
  border: none;
  border-radius: 8px;
  font-weight: 500; /* Mais fino */
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  font-family: 'Inter', sans-serif; /* Incluindo a fonte */
  
  /* Estado Padrão (Default) */
  background: transparent;
  color: ${colors.textMuted};

  &:hover {
    background: ${colors.bgMuted};
    color: ${colors.text};
  }

  /* Variante Primary */
  ${props => props.$variant === 'primary' && `
    color: ${colors.primary};
    font-weight: 600;
    
    &:hover {
      background: ${colors.primaryBg};
      color: ${colors.primary};
    }
  `}

  /* Variante Danger */
  ${props => props.$variant === 'danger' && `
    color: ${colors.danger};
    
    &:hover {
      background: ${colors.dangerBg};
      color: ${colors.danger};
    }
  `}
`

export const Divider = styled.div`
  height: 24px;
  width: 1px;
  background: ${colors.border}; /* Cor de borda clara */
  margin: 0 4px;
`

export const NotifyWrapper = styled.div`
  position: relative;
  display: inline-block;
`

/*
  DROPDOWN (MODO CLARO)
*/
export const DropdownCard = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 380px;
  border-radius: 12px;
  background: ${colors.bg};
  border: 1px solid ${colors.border};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: ${colors.text};
  overflow: hidden;
  z-index: 1100;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${colors.border};
`

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.text};
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.textMuted};
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
  &:hover { 
    color: ${colors.text}; 
    background: ${colors.bgMuted};
  }
`

export const NotificationsList = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 10px;
  background: ${colors.bgMuted};
  border: 1px solid ${colors.border};
`

export const NotificationText = styled.span`
  font-size: 14px;
  color: ${colors.textMuted};
`