import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

/* ----- PALETA (TEMA CLARO) ----- */
const colors = {
  text: '#1a202c',
  textMuted: '#5a6472',
  primary: '#3b82f6',
  primaryHover: '#4f9aff',
  danger: '#ef4444',
  bg: '#ffffff',
  bgMuted: '#f9fafb',
  border: '#e5e7eb',
  bgPage: '#f0f2f5', // O cinza claro do AppLayout
}

/*
  MUDANÇA 1: GLOBALSTYLE
  - A fonte Inter continua.
  - A cor padrão do texto agora é escura.
*/
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                 Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${colors.text};
  }
`

/*
  MUDANÇA 2: CONTAINER (O FUNDO DA PÁGINA)
  - Removemos o gradiente escuro.
  - Adicionamos o fundo cinza claro padrão.
*/
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: ${colors.bgPage};
`

/*
  MUDANÇA 3: CARD (O "BLOCO" DE LOGIN)
  - Removemos o glassmorphism.
  - Adicionamos o fundo branco e a sombra sutil.
*/
export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px 32px;
  border-radius: 16px;
  background: ${colors.bg};
  border: 1px solid ${colors.border};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  animation: ${fadeInUp} 0.6s ease-out;
`

export const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
`
export const LogoImage = styled.img`
  width: 120px; 
  height: auto;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 32px;
  text-align: center;
  color: ${colors.textMuted}; /* Cor de texto silenciada */
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const IconStyle = styled.div`
  position: absolute;
  left: 14px;
  color: #9ca3af; /* Cor de ícone claro */
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  transform: scale(1);
  z-index: 1; /* Para ficar acima do input */
`
export const IconStyleRight = styled(IconStyle)`
  left: auto;
  right: 14px;
  cursor: pointer;
`

/*
  MUDANÇA 4: INPUT
  - Inputs claros, com fundo cinza sutil.
*/
export const Input = styled.input`
  width: 100%;
  padding: 12px 16px; /* Padding normal */
  padding-left: 44px; /* Padding para o ícone esquerdo */
  border-radius: 10px;
  border: 1px solid ${colors.border};
  background: ${colors.bgMuted}; /* Fundo cinza claro */
  color: ${colors.text};
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  position: relative;

  &::placeholder { color: #9ca3af; }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    background: ${colors.bg};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    z-index: 2; /* Traz o input para frente ao focar */
  }

  /* Ajuste para o ícone direito */
  &:not(:placeholder-shown) + ${IconStyleRight} {
    color: ${colors.textMuted};
  }
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  /* Removemos o max-width daqui, o Card (400px) já limita */
  width: 100%;
  align-self: center;

  &:focus-within {
    ${IconStyle} {
      color: ${colors.primary};
      z-index: 3;
    }
    ${IconStyleRight} {
      color: ${colors.primary};
      z-index: 3;
    }
  }
  
  /* Corrige o padding do input de senha (que tem ícone direito) */
  ${Input}[type="password"] + ${IconStyle} + ${IconStyleRight} {
    right: 14px;
  }
  ${Input}[type="text"] + ${IconStyle} + ${IconStyleRight} {
    right: 14px;
  }
`

/* O Textarea não é usado no Login, mas atualizamos por consistência */
export const Textarea = styled.textarea`
  width: 100%;
  max-width: 500px;
  align-self: center;
  
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
  background: ${colors.bgMuted};
  color: ${colors.text};
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s ease-in-out;
  &::placeholder { color: #9ca3af; }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    background: ${colors.bg};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`

/*
  MUDANÇA 5: BOTÃO (FLAT + GLOW)
  - Removemos o gradiente.
  - Adicionamos o efeito de hover moderno.
*/
export const Button = styled.button`
  padding: 12px 14px;
  border: none;
  border-radius: 10px;
  background: ${colors.primary};
  color: #fff;
  font-weight: 600; /* 600 é mais elegante que 700 */
  font-size: 16px;
  letter-spacing: 0.5px; 
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: none;
  font-family: 'Inter', sans-serif;
  
  width: 100%;
  align-self: center;

  &:hover {
    transform: translateY(-2px);
    background: ${colors.primaryHover};
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }
`
export const Helper = styled.div`
  margin-top: 24px;
  font-size: 14px;
  color: ${colors.textMuted};
  text-align: center;
`
export const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    color: ${colors.primaryHover};
    text-decoration: underline;
  }
`

/*
  MUDANÇA 6: ERRO (TEMA CLARO)
*/
export const ErrorText = styled.p`
  color: ${colors.danger};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: -10px 0 10px 0;
  animation: ${fadeInUp} 0.3s ease-out;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  padding: 10px;
  border-radius: 8px;
  
  width: 100%;
  align-self: center;
`