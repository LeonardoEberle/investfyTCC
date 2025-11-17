import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

/* ----- PALETA (TEMA CLARO) ----- */
const colors = {
  text: '#1a202c',
  textMuted: '#5a6472',
  primary: '#3b82f6',
  primaryHover: '#4f9aff',
  bg: '#ffffff',
  bgMuted: '#f9fafb',
  border: '#e5e7eb',
}

/* ----- O "CARD" BRANCO PRINCIPAL ----- */
export const PageContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 40px;
  margin: 0 auto;
  color: ${colors.text};
  animation: ${fadeInUp} 0.5s ease-out;
  
  background: ${colors.bg};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`

/* ----- CABEÇALHO ----- */
export const PageHeader = styled.header`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${colors.border};
`

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.text};
  letter-spacing: -0.5px;
  margin: 0;
`

export const PageSubtitle = styled.p`
  font-size: 16px;
  color: ${colors.textMuted};
  margin-top: 8px;
`

/* ----- CARD DE DETALHES (CINZA CLARO) ----- */
export const DetailCard = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: ${colors.bgMuted}; /* Fundo cinza claro */
  border: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 12px;
`

/* ===== MUDANÇA IMPORTANTE AQUI =====
  O Card do Formulário agora tem o max-width,
  igual ao da tela de Criação.
*/
export const FormCard = styled(DetailCard)`
  margin-top: 24px;
  background: ${colors.bg}; /* Fundo branco */
  
  /* Centraliza o card do formulário */
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`

/* ----- ITENS DO CARD DE DETALHES ----- */
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid ${colors.border};
  &:last-child { border-bottom: none; }
`

export const Label = styled.span`
  color: ${colors.textMuted};
  font-weight: 500;
  font-size: 15px;
`

export const Value = styled.span`
  color: ${colors.text};
  font-weight: 600;
  font-size: 15px;
`

export const TagList = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.textMuted};
  border: 1px solid ${colors.border};
  border-radius: 999px;
  background: ${colors.bg};
`

/* ----- ESTILOS DE UPLOAD (VÍDEO E DOCS) ----- */
export const VideoBox = styled.div`
  margin-top: 4px;
  border-radius: 12px;
  overflow: hidden;
  background: ${colors.bgMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 2px dashed ${colors.border};
  color: ${colors.textMuted};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
  }
`

export const DocList = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const DocItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 10px;
  background: ${colors.bgMuted};
  border: 1px solid ${colors.border};
  color: ${colors.text};
`

/* ============================================== */
/* NOVOS ESTILOS DE FORMULÁRIO (TEMA CLARO)   */
/* ============================================== */

/* ===== MUDANÇA IMPORTANTE AQUI =====
  Removemos o max-width e a margem daqui.
  O formulário agora preenche 100% do FormCard (que tem 768px).
*/
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
  background: ${colors.bg};
  color: ${colors.text};
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);

  &::placeholder { color: #9ca3af; }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
  background: ${colors.bg};
  color: ${colors.text};
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);

  &::placeholder { color: #9ca3af; }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`

/* Botão de salvar do formulário */
export const FormButton = styled.button`
  padding: 12px 14px;
  border: none;
  border-radius: 10px;
  background: ${colors.primary};
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  
  max-width: 400px;
  align-self: center;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    background: ${colors.primaryHover};
  }
`