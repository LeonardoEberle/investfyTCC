import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 64px);
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

export const Textarea = styled.textarea`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #374151;
  background: #1f2937;
  color: #e5e7eb;
  min-height: 80px;
  resize: vertical;
`

export const Button = styled.button`
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`