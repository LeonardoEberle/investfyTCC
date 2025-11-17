import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

/* NOVA PALETA DE CORES (TEMA CLARO) 
*/
const colors = {
  text: '#1a202c', // Quase preto
  textMuted: '#5a6472', // Cinza
  primary: '#3b82f6', // Azul
  primaryHover: '#4f9aff',
  bg: '#ffffff', // Fundo branco
  bgMuted: '#f9fafb', // Fundo cinza bem claro
  border: '#e5e7eb', // Borda clara
}

/*
  LAYOUT PRINCIPAL (O "CARD" BRANCO)
  Isso agora é o "lençol" onde o conteúdo fica.
*/
export const PageContainer = styled.div`
  width: 100%;
  max-width: 1100px; /* Um pouco mais largo */
  padding: 40px;
  margin: 0 auto;
  color: ${colors.text};
  animation: ${fadeInUp} 0.5s ease-out;
  
  /* O novo visual */
  background: ${colors.bg};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`

/*
  CABEÇALHO DA PÁGINA
*/
export const PageHeader = styled.header`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${colors.border};
`

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.text};
  letter-spacing: -0.5px;
`

export const PageSubtitle = styled.p`
  font-size: 16px;
  color: ${colors.textMuted};
  margin-top: 8px;
`

/*
  BOTÃO PRINCIPAL ("Criar")
  Mantive o estilo "flat + glow"
*/
export const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  background: ${colors.primary};
  color: #fff;
  border: none;
  box-shadow: none;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    background: ${colors.primaryHover};
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`

/*
  CARD DE CRIAÇÃO (FORMULÁRIO)
  Agora ele é sutil, com uma borda.
*/
export const CreateFormCard = styled.div`
  margin-top: 24px;
  padding: 24px;
  border-radius: 16px;
  background: ${colors.bgMuted};
  border: 1px solid ${colors.border};
  animation: ${fadeInUp} 0.4s ease-out;
`

/*
  SEÇÃO DE EXEMPLO (CARD DE STARTUP)
*/
export const ExampleSection = styled.section`
  margin-top: 32px;
`

export const StartupCard = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: ${colors.bg}; /* Fundo branco */
  border: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    /* Efeito sutil de "acender" */
    transform: translateY(-4px);
    border-color: ${colors.primary};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }
`

export const StartupTitle = styled.h2`
  font-size: 22px;
  font-weight: 600; /* Menos "pesado" */
  color: ${colors.text};
  margin: 0;
`

export const StartupDescription = styled.p`
  font-size: 15px;
  color: ${colors.textMuted};
  line-height: 1.6;
  margin: 0;
`

export const StartupMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.textMuted};
  border: 1px solid ${colors.border};
  border-radius: 999px;
  background: ${colors.bgMuted};
`

export const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  padding-top: 16px;
  border-top: 1px solid ${colors.border};
`

/* Botão "Gerenciar" (Outline) */
export const ManageButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  background: transparent;
  border: 1px solid ${colors.border};
  color: ${colors.textMuted};
  transition: all 0.25s ease;

  &:hover {
    border-color: ${colors.primary};
    color: ${colors.primary};
    background: rgba(59, 130, 246, 0.05);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

/* ============================================== */
/* NOVOS ESTILOS DE FORMULÁRIO (TEMA CLARO)   */
/* ============================================== */

/* Estes substituem os do AuthStyles.
  Eles são criados aqui para não quebrar a tela de Login.
*/

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
  background: ${colors.bg}; /* Fundo branco */
  color: ${colors.text};
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);

  &::placeholder { color: #9ca3af; }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
  background: ${colors.bg};
  color: ${colors.text};
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);

  &::placeholder { color: #9ca3af; }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`

/* Botão de Salvar do Formulário */
export const FormButton = styled.button`
  padding: 12px 14px;
  border: none;
  border-radius: 10px;
  background: ${colors.primary};
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Centralizado e com largura máxima */
  max-width: 400px;
  align-self: center;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    background: ${colors.primaryHover};
  }
`

/* ESTILOS DO FORMULÁRIO (Upload)
*/
export const VideoBox = styled.div`
  margin-top: 4px;
  border-radius: 12px;
  overflow: hidden;
  background: ${colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 2px dashed ${colors.border};
  color: ${colors.textMuted};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
  }
`

export const DocList = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const DocItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 10px;
  background: ${colors.bg};
  border: 1px solid ${colors.border};
  color: ${colors.text};
`

/* Componente Content não usado, mas mantido por segurança */
export const Content = styled.div`
  background: rgba(31, 41, 55, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  padding: 22px;
`