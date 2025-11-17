import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { startups } from '../../data/startups'

/* MUDANÇA 1: 
  - Remover a importação do AuthStyles
  - Adicionar 'StyledButton' na importação do './styles'
*/
import { 
  PageContainer, PageHeader, PageTitle, PageSubtitle, 
  DetailCard, Row, Label, Value, TagList, Tag,
  StyledButton // <-- NOSSO NOVO BOTÃO
} from './styles'
// import { Button } from '../../components/Auth/AuthStyles' // <-- REMOVIDO

export default function DetalheStartup() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = startups.find((s) => s.id === id)
  
  if (!item) {
    return (
      <PageContainer>
        <PageHeader>
          <PageTitle>Startup não encontrada</PageTitle>
          <PageSubtitle>Verifique a lista e tente novamente.</PageSubtitle>
        </PageHeader>
        
        {/* MUDANÇA 2: Usar o StyledButton */}
        <StyledButton onClick={() => navigate('/startups')}>Voltar</StyledButton>
      
      </PageContainer>
    )
  }
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{item.nome}</PageTitle>
        <PageSubtitle>{item.descricao}</PageSubtitle>
      </PageHeader>
      
      {/* MUDANÇA 3: Usar o StyledButton */}
      <StyledButton onClick={() => navigate(-1)}>Voltar</StyledButton>
      
      <DetailCard>
        <Row>
          <Label>Categoria</Label>
          <Value>{item.categoria}</Value>
        </Row>
        <Row>
          <Label>Fase</Label>
          <Value>{item.fase}</Value>
        </Row>
        <Row>
          <Label>Risco</Label>
          <Value>{item.risco}</Value>
        </Row>
        <TagList>
          <Tag>{item.categoria}</Tag>
          <Tag>{item.fase}</Tag>
          <Tag>Risco {item.risco}</Tag>
        </TagList>
      </DetailCard>
    </PageContainer>
  )
}