import styled from 'styled-components'

export const Bar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  background: rgba(17, 24, 39, 0.75);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); 
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`

export const LogoImage = styled.img`
  height: 60px;
  width: auto;
  cursor: pointer;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  
  background: ${props => {
    if (props.$variant === 'danger') return 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)';
    if (props.$variant === 'primary') return 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)';
    return 'transparent';
  }};
  
  color: ${props => (props.$variant === 'danger' || props.$variant === 'primary' ? '#fff' : '#9ca3af')};
  
  border: 1px solid ${props => {
    if (props.$variant === 'danger' || props.$variant === 'primary') return 'transparent';
    return '#374151';
  }};

  box-shadow: ${props => (props.$variant === 'danger' || props.$variant === 'primary' ? '0 4px 15px rgba(0, 0, 0, 0.2)' : 'none')};

  &:hover {
    background: ${props => {
      if (props.$variant === 'danger') return 'linear-gradient(90deg, #f87171 0%, #ef4444 100%)';
      if (props.$variant === 'primary') return 'linear-gradient(90deg, #4f9aff 0%, #3b82f6 100%)';
      return 'rgba(255, 255, 255, 0.05)';
    }};
    
    color: #fff; 
    
    border-color: ${props => {
      if (props.$variant === 'danger' || props.$variant === 'primary') return 'transparent';
      return '#4b5563';
    }};

    transform: translateY(-1px);
    box-shadow: ${props => (props.$variant === 'danger' || props.$variant === 'primary' ? '0 6px 20px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)')};
  }

  &:active {
    transform: translateY(0);
  }
`

export const Divider = styled.div`
  height: 24px;
  width: 1px;
  background: #374151;
  margin: 0 4px;
`