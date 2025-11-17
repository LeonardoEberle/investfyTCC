import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 48px 64px;
  margin: 0 auto;
  color: #e5e7eb;
  animation: ${fadeInUp} 0.5s ease-out;
`

export const PageHeader = styled.header`
  margin-bottom: 32px;
`

export const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`

export const PageSubtitle = styled.p`
  font-size: 18px;
  color: #cbd5e1;
  margin-top: 8px;
`

export const Content = styled.div`
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`

export const ItemCard = styled.button`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 14px;
  background: rgba(31, 41, 55, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e5e7eb;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: left;
  &:hover { transform: translateY(-3px); border-color: rgba(255,255,255,0.3); }
`

export const ItemTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
`

export const ItemMeta = styled.div`
  font-size: 13px;
  color: #9ca3af;
  display: flex;
  gap: 8px;
`

export const ItemDesc = styled.div`
  font-size: 14px;
  color: #cbd5e1;
`