import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { startups } from '../../data/startups'
import { PageContainer, PageHeader, PageTitle, PageSubtitle, DetailCard, Row, Label, Value, TagList, Tag } from './styles'
import { Button } from '../../components/Auth/AuthStyles'

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
        <Button onClick={() => navigate('/startups')}>Voltar</Button>
      </PageContainer>
    )
  }
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{item.nome}</PageTitle>
        <PageSubtitle>{item.descricao}</PageSubtitle>
      </PageHeader>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
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