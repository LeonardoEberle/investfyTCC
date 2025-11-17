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
  
  /* Aplicando a fonte Inter */
  font-family: 'Inter', sans-serif;
`

/* ----- CABEÇALHO ----- */
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

/* ----- WRAPPER DA LISTA ----- */
export const Content = styled.div`
  /* Removemos o fundo e a borda, 
     pois agora ele está dentro do PageContainer
  */
  margin-top: 16px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

/* ----- CARD DE ITEM (MODO CLARO) ----- */
export const ItemCard = styled.button`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  border-radius: 12px;
  background: ${colors.bgMuted}; /* Fundo cinza-claro */
  border: 1px solid ${colors.border};
  color: ${colors.text};
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: left;
  font-family: 'Inter', sans-serif;

  &:hover { 
    transform: translateY(-4px); 
    border-color: ${colors.primary};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    background: ${colors.bg}; /* Fica branco ao passar o mouse */
  }
`

export const ItemTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: ${colors.text};
`

export const ItemMeta = styled.div`
  font-size: 13px;
  color: ${colors.textMuted};
  display: flex;
  gap: 8px;
`

export const ItemDesc = styled.div`
  font-size: 14px;
  color: ${colors.textMuted};
  line-height: 1.6;
`