import styled from 'styled-components'

export const Bar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: #111827;
  border-bottom: 1px solid #1f2937;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  color: #e5e7eb;
  z-index: 1000;
`

export const Logo = styled.div`
  font-weight: 700;
  letter-spacing: 0.3px;
  cursor: pointer;
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
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