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
  margin-bottom: 32px;
`

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`

export const PageSubtitle = styled.p`
  font-size: 16px;
  color: #cbd5e1;
  margin-top: 6px;
`

export const Content = styled.div`
  background: rgba(31, 41, 55, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  padding: 22px;
`

export const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(95deg, #3b82f6 0%, #2563eb 100%);
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 28px rgba(59, 130, 246, 0.35);
  margin-top: 8px;
  &:hover { transform: translateY(-3px); background: linear-gradient(95deg, #4f9aff 0%, #3b82f6 100%); }
  &:active { transform: translateY(-1px); }
`

export const ExampleSection = styled.section`
  margin-top: 24px;
`

export const StartupCard = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: rgba(31, 41, 55, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CreateFormCard = styled.div`
  margin-top: 16px;
  padding: 24px;
  border-radius: 16px;
  background: rgba(31, 41, 55, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
`

export const VideoBox = styled.div`
  margin-top: 12px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`

export const DocList = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const DocItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(55, 65, 81, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #cbd5e1;
`

export const StartupTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`

export const StartupDescription = styled.p`
  font-size: 15px;
  color: #cbd5e1;
  line-height: 1.7;
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
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  color: #9ca3af;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(55, 65, 81, 0.25);
`

export const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`

export const ManageButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.14);
  &:hover { background: rgba(255, 255, 255, 0.12); transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`