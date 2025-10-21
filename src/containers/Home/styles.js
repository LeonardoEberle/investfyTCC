import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
`

export const Card = styled.div`
  width: 100%;
  max-width: 480px;
  background: #111827;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  color: #e5e7eb;
`

export const Title = styled.h1`
  font-size: 22px;
  margin: 0 0 8px;
`

export const Text = styled.p`
  margin-top: 8px;
  color: #9ca3af;
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`

export const Button = styled.button`
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  background: ${props => (props.$variant === 'danger' ? '#ef4444' : '#2563eb')};
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`