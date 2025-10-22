import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const moveGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                 Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #e5e7eb;
  }
`

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: linear-gradient(
    -45deg, 
    #0f172a, /* slate-900 */
    #111827, /* gray-900 */
    #1e293b, /* slate-800 */
    #282157  /* Roxo bem escuro e sutil */
  );
  background-size: 400% 400%;
  animation: ${moveGradient} 15s ease infinite;
`

export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px 32px;
  border-radius: 24px;
  background: rgba(17, 24, 39, 0.75);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2); 
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  animation: ${fadeInUp} 0.6s ease-out;
`

export const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
`
export const LogoImage = styled.img`
  width: 120px; 
  height: auto;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 32px;
  text-align: center;
  color: #9ca3af;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const IconStyle = styled.div`
  position: absolute;
  left: 14px;
  color: #6b7280; 
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  transform: scale(1);
`
export const IconStyleRight = styled.div`
  position: absolute;
  right: 14px;
  color: #6b7280; 
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #9ca3af;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 44px;
  border-radius: 10px;
  border: 1px solid #374151;
  background: #1f2937;
  color: #e5e7eb;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  &::placeholder { color: #6b7280; }

  &:focus {
    outline: none;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:focus-within {
    ${Input} {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
    }
    ${IconStyle} {
      color: #3b82f6;
      transform: scale(1.1); 
    }
    ${IconStyleRight} {
      color: #3b82f6;
    }
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #374151;
  background: #1f2937;
  color: #e5e7eb;
  font-size: 16px;
  font-family: inherit;
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s ease-in-out;
  &::placeholder { color: #6b7280; }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
  }
`

export const Button = styled.button`
  padding: 12px 14px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.5px; 
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    background: linear-gradient(90deg, #4f9aff 0%, #3b82f6 100%);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }
`
export const Helper = styled.div`
  margin-top: 24px;
  font-size: 14px;
  color: #9ca3af;
  text-align: center;
`
export const StyledLink = styled(Link)`
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    color: #60a5fa;
    text-decoration: underline;
  }
`

export const ErrorText = styled.p`
  color: #fecaca; 
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: -10px 0 10px 0;
  animation: ${fadeInUp} 0.3s ease-out;
  background: rgba(220, 38, 38, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  padding: 10px;
  border-radius: 8px;
`