import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PageContainer, PageHeader, PageTitle, PageSubtitle, Content, List, ItemCard, ItemTitle, ItemMeta, ItemDesc } from './styles'
import { startups } from '../../data/startups'

export default function Startups() {
  const navigate = useNavigate()
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Startups</PageTitle>
        <PageSubtitle>Explore startups e oportunidades de investimento.</PageSubtitle>
      </PageHeader>
      <Content>
        <List>
          {startups.map((s) => (
            <ItemCard key={s.id} onClick={() => navigate(`/startups/${s.id}`)} aria-label={s.nome}>
              <ItemTitle>{s.nome}</ItemTitle>
              <ItemMeta>
                <span>{s.categoria}</span>
                <span>• {s.fase}</span>
                <span>• {s.risco}</span>
              </ItemMeta>
              <ItemDesc>{s.descricao}</ItemDesc>
            </ItemCard>
          ))}
        </List>
      </Content>
    </PageContainer>
  )
}