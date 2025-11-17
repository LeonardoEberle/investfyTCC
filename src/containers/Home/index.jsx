import React from 'react'
import { Link } from 'react-router-dom'
import {
  DashboardContainer, 
  Header, 
  PageTitle,
  PageSubtitle,
  HeroSection, 
  HeroCard,
  HeroImagePlaceholder,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroMeta,
  MetaItem,
  Badge,
  Button,
  Section, 
  SectionTitle,
  HorizontalScroll,
  ItemCard,
  ItemTitle,
  ItemMeta
} from './styles'
import { 
  HiOutlineTrendingUp, 
  HiOutlineShieldCheck, 
  HiOutlineTag, 
  HiOutlineArrowRight,
  HiOutlineChartPie,
  HiOutlineLightBulb 
} from 'react-icons/hi'
import { startups } from '../../data/startups'

const Home = () => {
  const heroItem = startups[0]
  const outrasStartups = startups.slice(1)

  return (
    <DashboardContainer> 
      <Header>
        <PageTitle>Startups em destaque</PageTitle>
        <PageSubtitle>Descubra e analise startups selecionadas e da comunidade.</PageSubtitle>
      </Header>

      <HeroSection>
        <HeroCard>
          <HeroImagePlaceholder>
            <HiOutlineLightBulb size={80} /> 
          </HeroImagePlaceholder>
          <HeroContent>
            <HeroTitle>{heroItem.nome}</HeroTitle>
            <HeroText>
              {heroItem.descricao}
            </HeroText>
            <HeroMeta>
              <MetaItem>
                <HiOutlineTag size={20} />
                <span>Categoria</span>
                <strong>{heroItem.categoria}</strong>
              </MetaItem>
              <MetaItem>
                <HiOutlineShieldCheck size={20} />
                <span>Risco</span>
                <Badge $risco={heroItem.risco}>{heroItem.risco}</Badge>
              </MetaItem>
              <MetaItem>
                <HiOutlineTrendingUp size={20} />
                <span>Fase</span>
                <strong>{heroItem.fase}</strong>
              </MetaItem>
            </HeroMeta>
            <Button
              as={Link}
              to={`/startups/${heroItem.id}`}
              aria-label={`Saiba mais sobre ${heroItem.nome}`}
            >
              <span>Ver detalhes</span>
              <HiOutlineArrowRight size={20} />
            </Button>
          </HeroContent>
        </HeroCard>
      </HeroSection>

      <Section>
        <SectionTitle>Explorar mais startups</SectionTitle>
        <HorizontalScroll>
          {outrasStartups.map((item, idx) => (
            <ItemCard key={idx} as={Link} to={`/startups/${item.id}`} aria-label={item.nome}>
              <div>
                <ItemMeta>
                  <HiOutlineTag size={16} />
                  <span>{item.categoria}</span>
                </ItemMeta>
                <ItemTitle>{item.nome}</ItemTitle>
              </div>
              <ItemMeta>
                <HiOutlineShieldCheck size={16} />
                <Badge $risco={item.risco}>{item.risco}</Badge>
              </ItemMeta>
            </ItemCard>
          ))}
        </HorizontalScroll>
      </Section>
    </DashboardContainer>
  )
}

export default Home