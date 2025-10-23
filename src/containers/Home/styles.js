import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export const DashboardContainer = styled.div`
  width: 100%;
  max-width: 1280px; 
  padding: 48px 64px; 
  margin: 0 auto; 
  animation: ${fadeInUp} 0.5s ease-out;
  color: #e5e7eb;
`

export const Header = styled.header`
  margin-bottom: 48px; 
  animation: ${fadeInUp} 0.6s ease-out backwards;
`

export const PageTitle = styled.h1`
  font-size: 36px; 
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.5px; 
`

export const PageSubtitle = styled.p`
  font-size: 18px;
  color: #cbd5e1;
  margin-top: 8px;
  line-height: 1.6;
`

export const HeroSection = styled.section`
  margin-bottom: 64px; 
  animation: ${fadeInUp} 0.7s ease-out backwards;
`

export const HeroCard = styled.div`
  display: flex;
  gap: 48px;
  padding: 40px;
  border-radius: 24px;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2); 
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  transition: all 0.35s ease;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -60%; left: -60%;
    width: 220%; height: 220%;
    background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 35%);
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: scale(0.6);
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const HeroImagePlaceholder = styled.div`
  width: 240px;
  flex-shrink: 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.8) 0%, rgba(55, 48, 163, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  box-shadow: inset 0 0 25px rgba(0,0,0,0.25);
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeroTitle = styled.h2`
  font-size: 32px; 
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
`

export const HeroText = styled.p`
  font-size: 16px;
  color: #cbd5e1;
  line-height: 1.7; 
  margin-top: 16px;
  flex-grow: 1;
  max-width: 60ch; 
`

export const HeroMeta = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 24px;
`

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 15px; 
    color: #9ca3af;
  }
  strong {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }
`

const getBadgeStyle = (props) => {
  switch (props.$risco?.toLowerCase()) {
    case 'baixo': return { bg: 'rgba(16, 185, 129, 0.15)', text: '#34d399', border: 'rgba(16, 185, 129, 0.4)' };
    case 'médio': return { bg: 'rgba(245, 159, 11, 0.15)', text: '#fbbf24', border: 'rgba(245, 159, 11, 0.4)' };
    case 'alto': return { bg: 'rgba(239, 68, 68, 0.15)', text: '#f87171', border: 'rgba(239, 68, 68, 0.4)' };
    default: return { bg: 'rgba(55, 65, 81, 0.3)', text: '#9ca3af', border: 'rgba(55, 65, 81, 0.6)' };
  }
}

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px; 
  font-size: 13px;
  font-weight: 600;
  border-radius: 999px;
  background: ${props => getBadgeStyle(props).bg};
  color: ${props => getBadgeStyle(props).text};
  border: 1px solid ${props => getBadgeStyle(props).border};
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px; 
  padding: 14px 28px;
  border: none;
  border-radius: 10px; 
  background: linear-gradient(95deg, #3b82f6 0%, #2563eb 100%);
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 25px rgba(59, 130, 246, 0.35);
  margin-top: 32px; 
  align-self: flex-start;

  &:hover {
    transform: translateY(-4px); 
    box-shadow: 0 10px 35px rgba(59, 130, 246, 0.45);
    background: linear-gradient(95deg, #4f9aff 0%, #3b82f6 100%);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 20px rgba(59, 130, 246, 0.3);
  }
`

export const Section = styled.section`
  animation: ${fadeInUp} 0.8s ease-out backwards;
`

export const SectionTitle = styled.h3`
  font-size: 26px; 
  font-weight: 600;
  color: #fff;
  margin-top: 64px;
  margin-bottom: 28px;
  animation-delay: 0.1s; 
`

export const HorizontalScroll = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 4px; 
  margin: -4px; 
  padding-bottom: 24px; 
  margin-bottom: -24px; 
  scroll-padding: 0 64px; 
  scrollbar-width: thin; 
  scrollbar-color: rgba(75, 85, 99, 0.6) transparent; 

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(75, 85, 99, 0.6);
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
   &::-webkit-scrollbar-track {
    background: transparent;
  }
`

export const ItemCard = styled.div`
  flex: 0 0 320px; 
  height: 240px; 
  padding: 28px; 
  border-radius: 20px;
  background: rgba(31, 41, 55, 0.6); 
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);

  &::before { 
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(145deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
    background: rgba(40, 50, 65, 0.8);
    border-color: rgba(255, 255, 255, 0.3);

    &::before {
      opacity: 1;
    }
  }
`

export const ItemTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  margin-top: 10px; 
  line-height: 1.4;
`

export const ItemMeta = styled.div`
  font-size: 14px;
  color: #9ca3af;
  display: flex;
  align-items: center;
  gap: 8px;
`