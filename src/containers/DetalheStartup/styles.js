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
  bg: '#ffffff',
  bgMuted: '#f9fafb',
  border: '#e5e7eb',
}

/* ----- O "CARD" BRANCO PRINCIPAL ----- */
export const PageContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 40px;
  margin: 0 auto;
  color: ${colors.text};
  animation: ${fadeInUp} 0.5s ease-out;
  
  background: ${colors.bg};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  
  font-family: 'Inter', sans-serif;
`

/* ----- CABEÇALHO ----- */
export const PageHeader = styled.header`
  margin-bottom: 24px;
`

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.text};
  letter-spacing: -0.5px;
  margin: 0;
`

export const PageSubtitle = styled.p`
  font-size: 16px;
  color: ${colors.textMuted};
  margin-top: 8px;
`

/* ----- CARD DE DETALHES (CINZA CLARO) ----- */
export const DetailCard = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: ${colors.bgMuted};
  border: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 12px;
`

/* ----- ITENS DO CARD DE DETALHES ----- */
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid ${colors.border};
  &:last-child { border-bottom: none; }
`

export const Label = styled.span`
  color: ${colors.textMuted};
  font-weight: 500;
  font-size: 15px;
`

export const Value = styled.span`
  color: ${colors.text};
  font-weight: 600;
  font-size: 15px;
`

export const TagList = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
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
  background: ${colors.bg};
`

/* ===== NOSSO NOVO BOTÃO "VOLTAR" =====
  Substitui o <Button> que vinha do AuthStyles
*/
export const StyledButton = styled.button`
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
  
  margin-bottom: 24px; 

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