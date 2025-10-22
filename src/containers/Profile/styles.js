import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export const ProfileContainer = styled.div`
  display: flex;
  gap: 40px; 
  width: 100%;
  max-width: 1024px; 
  align-items: flex-start;
  padding: 40px; 
  animation: ${fadeInUp} 0.6s ease-out;
`

export const InfoCard = styled.div`
  flex: 1.2; 
  padding: 32px;
  border-radius: 24px;
  background: rgba(30, 41, 59, 0.7); 
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2); 
  box-shadow: 0 10px 35px 0 rgba(0, 0, 0, 0.4);
  color: #e5e7eb;
  animation: ${fadeInUp} 0.7s ease-out backwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 40px 0 rgba(0, 0, 0, 0.45);
  }
`

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const AvatarPlaceholder = styled.div`
  width: 72px; 
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(145deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.8));
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
  color: #fff;
  line-height: 1.3;
`

export const UserEmail = styled.p`
  font-size: 15px; 
  color: #9ca3af;
  margin-top: 4px;
`

export const InfoSection = styled.div`
  margin-bottom: 24px; 
`

export const InfoSectionTitle = styled.h3`
  font-size: 14px; 
  font-weight: 600;
  color: #6b7280; 
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 16px; 
`

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start; 
  gap: 12px;
  font-size: 15px;
  line-height: 1.5;

  svg {
    color: #6b7280;
    flex-shrink: 0;
    margin-top: 3px; 
  }
`
export const InfoLabel = styled.span`
   color: #9ca3af;
   font-weight: 500;
   min-width: 90px; 
`

export const InfoValue = styled.span`
  color: #cbd5e1;
  word-break: break-word; 
`

export const BioText = styled.p`
  font-size: 15px;
  color: #cbd5e1;
  line-height: 1.7;
  font-style: italic;
  background: rgba(55, 65, 81, 0.2); 
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`