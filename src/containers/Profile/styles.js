import styled, { keyframes } from 'styled-components'

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
  bg: '#ffffff',
  bgMuted: '#f9fafb',
  border: '#e5e7eb',
}

/* ----- O "CARD" BRANCO PRINCIPAL (COM GRID) ----- */
export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr; /* Colunas para info e form */
  gap: 32px; 
  width: 100%;
  max-width: 1100px; 
  align-items: flex-start;
  padding: 0; /* O padding será interno dos cards */
  animation: ${fadeInUp} 0.6s ease-out;
  
  background: ${colors.bg};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  font-family: 'Inter', sans-serif;
  overflow: hidden; /* Para os cantos arredondados */
`

/* ----- CARD DE INFORMAÇÕES (LADO ESQUERDO, CINZA) ----- */
export const InfoCard = styled.div`
  padding: 32px;
  background: ${colors.bgMuted}; /* Fundo cinza claro */
  border-right: 1px solid ${colors.border};
  color: ${colors.text};
  height: 100%; /* Ocupa a altura toda do grid */
`

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid ${colors.border};
`

export const AvatarPlaceholder = styled.div`
  width: 72px; 
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(145deg, ${colors.primary}, ${colors.primaryHover});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.35);
  flex-shrink: 0; 
`

export const UserName = styled.h2`
  font-size: 26px; 
  font-weight: 700; 
  color: ${colors.text};
  line-height: 1.3;
`

export const UserEmail = styled.p`
  font-size: 15px; 
  color: ${colors.textMuted};
  margin-top: 4px;
`

export const InfoSection = styled.div`
  margin-bottom: 24px; 
`

export const InfoSectionTitle = styled.h3`
  font-size: 14px; 
  font-weight: 600;
  color: ${colors.textMuted}; 
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Uma coluna só fica mais limpo */
  gap: 16px; 
`

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start; 
  gap: 12px;
  font-size: 15px;
  line-height: 1.5;

  svg {
    color: ${colors.textMuted};
    flex-shrink: 0;
    margin-top: 3px; 
  }
`
export const InfoLabel = styled.span`
   color: ${colors.textMuted};
   font-weight: 500;
   min-width: 90px; 
`

export const InfoValue = styled.span`
  color: ${colors.text};
  word-break: break-word; 
`

export const BioText = styled.p`
  font-size: 15px;
  color: ${colors.text};
  line-height: 1.7;
  font-style: italic;
  background: ${colors.bg}; 
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${colors.border};
`

/* ============================================== */
/* NOVOS ESTILOS DE FORMULÁRIO (TEMA CLARO)   */
/* ============================================== */

/* Este é o card da direita (Formulário) */
export const FormCard = styled.div`
  padding: 32px;
  background: ${colors.bg}; /* Fundo branco */
`

export const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.text};
  margin: 0 0 24px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.border};
`

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
  background: ${colors.bgMuted}; /* Fundo cinza claro */
  color: ${colors.text};
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);

  &::placeholder { color: #9ca3af; }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    background: ${colors.bg};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
  background: ${colors.bgMuted};
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
    background: ${colors.bg};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`

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
  margin-top: 8px; /* Espaço extra */
  
  width: 100%; /* Botão esticado */

  &:hover {
    transform: translateY(-2px);
    background: ${colors.primaryHover};
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
  }
`