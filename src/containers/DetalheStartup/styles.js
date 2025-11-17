import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 40px;
  margin: 0 auto;
  color: #e5e7eb;
  animation: ${fadeInUp} 0.5s ease-out;
`

export const PageHeader = styled.header`
  margin-bottom: 24px;
`

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`

export const PageSubtitle = styled.p`
  font-size: 16px;
  color: #cbd5e1;
  margin-top: 6px;
`

export const DetailCard = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: rgba(31, 41, 55, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  &:last-child { border-bottom: none; }
`

export const Label = styled.span`
  color: #9ca3af;
  font-weight: 600;
`

export const Value = styled.span`
  color: #fff;
  font-weight: 700;
`

export const TagList = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  color: #9ca3af;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(55, 65, 81, 0.25);
`