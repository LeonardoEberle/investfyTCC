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
  max-width: 420px;
  background: #111827;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  color: #e5e7eb;
`

export const Title = styled.h1`
  font-size: 20px;
  margin: 0 0 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #374151;
  background: #1f2937;
  color: #e5e7eb;
`

export const Button = styled.button`
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  background: #10b981;
  color: #0b1020;
  font-weight: 700;
  cursor: pointer;
`

export const Helper = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #9ca3af;
`

export const ErrorText = styled.p`
  color: #ef4444;
  font-size: 14px;
  margin: 0;
`