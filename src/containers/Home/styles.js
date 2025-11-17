import styled, { keyframes } from 'styled-components'

/* ----- ANIMAÇÃO E CORES ----- */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const colors = {
  text: '#1a202c',
  textMuted: '#5a6472',
  primary: '#3b82f6',
  primaryHover: '#4f9aff',
  bg: '#ffffff',
  bgMuted: '#f9fafb',
  border: '#e5e7eb',
}

/* ----- O CONTAINER (NÃO É MAIS UM CARD) ----- */
/* Ele apenas centraliza o conteúdo no fundo cinza claro */
export const DashboardContainer = styled.div`
  width: 100%;
  max-width: 1280px; 
  padding: 40px; 
  margin: 0 auto; 
  animation: ${fadeInUp} 0.5s ease-out;
  color: ${colors.text};
  font-family: 'Inter', sans-serif; /* Aplicando a fonte */
`

/* ----- CABEÇALHO (TEMA CLARO) ----- */
export const Header = styled.header`
  margin-bottom: 32px; 
  padding-bottom: 24px;
  border-bottom: 1px solid ${colors.border};
  animation: ${fadeInUp} 0.6s ease-out backwards;
`

export const PageTitle = styled.h1`
  font-size: 32px; 
  font-weight: 700;
  color: ${colors.text};
  letter-spacing: -0.5px; 
`

export const PageSubtitle = styled.p`
  font-size: 16px;
  color: ${colors.textMuted};
  margin-top: 8px;
  line-height: 1.6;
`

/* ----- HERO CARD (O "ALGO A MAIS") ----- */
export const HeroSection = styled.section`
  margin-bottom: 48px; 
  animation: ${fadeInUp} 0.7s ease-out backwards;
`

export const HeroCard = styled.div`
  display: grid; /* Grid é mais robusto que flex aqui */
  grid-template-columns: 240px 1fr;
  gap: 40px;
  padding: 40px;
  border-radius: 20px;
  background: ${colors.bg};
  border: 1px solid ${colors.border}; 
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  transition: all 0.35s ease;
  overflow: hidden;
  position: relative;
  
  /* Layout para telas menores */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  /* O "Glow" sutil */
  &::before {
    content: '';
    position: absolute;
    top: -50%; left: -50%;
    width: 200%; height: 200%;
    background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 30%);
    opacity: 0;
    transition: opacity 0.5s ease;
    transform: scale(0.8);
    pointer-events: none; /* Importante para não bloquear o clique */
  }

  /* Hover "Premium" */
  &:hover {
    transform: translateY(-8px) scale(1.01);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const HeroImagePlaceholder = styled.div`
  width: 100%; /* Ocupa o grid */
  height: 240px;
  flex-shrink: 0;
  border-radius: 16px;
  background: ${colors.bgMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  border: 1px solid ${colors.border};
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeroTitle = styled.h2`
  font-size: 28px; 
  font-weight: 600;
  color: ${colors.text};
  line-height: 1.3;
`

export const HeroText = styled.p`
  font-size: 16px;
  color: ${colors.textMuted};
  line-height: 1.7; 
  margin-top: 16px;
  flex-grow: 1;
  max-width: 60ch; 
`

export const HeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 24px;
  margin-top: 24px;
`

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 15px; 
    color: ${colors.textMuted};
  }
  strong {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.text};
  }
`

/* ----- BADGES (TEMA CLARO) ----- */
const getBadgeStyle = (props) => {
  switch (props.$risco?.toLowerCase()) {
    case 'baixo': return { bg: 'rgba(16, 185, 129, 0.1)', text: '#065f46', border: 'rgba(16, 185, 129, 0.2)' };
    case 'médio': return { bg: 'rgba(245, 159, 11, 0.1)', text: '#92400e', border: 'rgba(245, 159, 11, 0.2)' };
    case 'alto': return { bg: 'rgba(239, 68, 68, 0.1)', text: '#991b1b', border: 'rgba(239, 68, 68, 0.2)' };
    default: return { bg: colors.bgMuted, text: colors.textMuted, border: colors.border };
  }
}

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 999px;
  background: ${props => getBadgeStyle(props).bg};
  color: ${props => getBadgeStyle(props).text};
  border: 1px solid ${props => getBadgeStyle(props).border};
`

/* ----- BOTÃO (FLAT + GLOW) ----- */
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px; 
  padding: 14px 24px;
  border: none;
  border-radius: 10px; 
  background: ${colors.primary};
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: none;
  margin-top: 32px; 
  align-self: flex-start;
  text-decoration: none; /* Para o 'as={Link}' */

  &:hover {
    transform: translateY(-3px); 
    background: ${colors.primaryHover};
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
  }
`

/* ----- SEÇÃO CARDS ----- */
export const Section = styled.section`
  animation: ${fadeInUp} 0.8s ease-out backwards;
`

export const SectionTitle = styled.h3`
  font-size: 24px; 
  font-weight: 600;
  color: ${colors.text};
  margin-top: 48px;
  margin-bottom: 24px;
`

/* ----- A CORREÇÃO (SCROLLBAR BONITA) ----- */
export const HorizontalScroll = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 4px; 
  padding-bottom: 24px; /* Espaço para o scrollbar */
  
  /* Remove as margens que quebravam o layout */
  margin: 0;

  /* Scrollbar Fina (Firefox) */
  scrollbar-width: thin; 
  scrollbar-color: ${colors.border} transparent; 

  /* Scrollbar Fina (Chrome, Safari) */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.border};
    border-radius: 10px;
    border: 3px solid transparent; /* Cria um padding no thumb */
    background-clip: content-box;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: #bbbec3; /* Cor mais escura no hover */
  }
`

/* ----- CARD DE ITEM (TEMA CLARO) ----- */
export const ItemCard = styled.div`
  flex: 0 0 320px; 
  height: 240px; 
  padding: 28px; 
  border-radius: 16px; /* Mais suave que 20px */
  background: ${colors.bg}; 
  border: 1px solid ${colors.border};
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  cursor: pointer;
  text-decoration: none; /* Para o 'as={Link}' */

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    border-color: ${colors.primary};
  }
`

export const ItemTitle = styled.h3` /* Mudado para H3 para semântica */
  font-weight: 600;
  font-size: 20px;
  color: ${colors.text};
  margin-top: 10px; 
  line-height: 1.4;
  transition: color 0.25s ease;
`

export const ItemMeta = styled.div`
  font-size: 14px;
  color: ${colors.textMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`