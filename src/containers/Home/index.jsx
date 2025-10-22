import React from 'react'
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

const Home = () => {
  const investimentos = [
    {
      titulo: 'Tesouro IPCA+ 2029',
      categoria: 'Renda Fixa',
      risco: 'Baixo',
      retorno: 'IPCA + 5.5% a.a.',
      descricao: 'Proteja seu capital da inflação com rentabilidade real garantida pelo governo.'
    },
    {
      titulo: 'ETF de S&P 500 (IVVB11)',
      categoria: 'ETF Global',
      risco: 'Médio',
      retorno: 'Dolarizado',
      descricao: 'Invista nas 500 maiores empresas dos EUA com um único ativo negociado na B3.'
    },
    {
      titulo: 'FII de Tijolo Híbrido',
      categoria: 'FIIs',
      risco: 'Médio',
      retorno: 'Dividendos Mensais',
      descricao: 'Receba aluguéis de um portfólio diversificado de imóveis (lajes, galpões).'
    },
    {
      titulo: 'Ações de Dividendos (Brasil)',
      categoria: 'Ações BR',
      risco: 'Médio',
      retorno: 'Dividend Yield',
      descricao: 'Foque em empresas sólidas, boas pagadoras de dividendos, para renda passiva.'
    },
    {
      titulo: 'BDRs de Tech (Ex: Apple, Google)',
      categoria: 'Ações Globais',
      risco: 'Alto',
      retorno: 'Crescimento/Dólar',
       descricao: 'Acesse gigantes da tecnologia mundial através da bolsa brasileira.'
    },
     {
      titulo: 'CDB Pós-Fixado (Liquidez Diária)',
      categoria: 'Renda Fixa',
      risco: 'Baixo',
      retorno: '>100% CDI',
      descricao: 'Ideal para reserva de emergência, com rendimento diário e segurança bancária.'
    },
  ]

  const heroItem = investimentos[0]
  const otherInvestimentos = investimentos.slice(1)

  return (
    <DashboardContainer> 
      <Header>
        <PageTitle>Dashboard de Oportunidades</PageTitle>
        <PageSubtitle>Descubra e analise ideias de investimento selecionadas e da comunidade.</PageSubtitle>
      </Header>

      <HeroSection>
        <HeroCard>
          <HeroImagePlaceholder>
            <HiOutlineLightBulb size={80} /> 
          </HeroImagePlaceholder>
          <HeroContent>
            <HeroTitle>{heroItem.titulo}</HeroTitle>
            <HeroText>
              {heroItem.descricao} {/* Descrição mais detalhada */}
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
                <span>Retorno</span>
                <strong>{heroItem.retorno}</strong>
              </MetaItem>
            </HeroMeta>
            <Button
              type="button"
              onClick={() => alert('Em breve: detalhes do investimento.')}
              aria-label={`Saiba mais sobre ${heroItem.titulo}`}
            >
              <span>Analisar Oportunidade</span>
              <HiOutlineArrowRight size={20} />
            </Button>
          </HeroContent>
        </HeroCard>
      </HeroSection>

      <Section>
        <SectionTitle>Explorar Mais Investimentos</SectionTitle>
        <HorizontalScroll>
          {otherInvestimentos.map((item, idx) => (
            <ItemCard key={idx}>
              <div>
                <ItemMeta>
                  <HiOutlineTag size={16} />
                  <span>{item.categoria}</span>
                </ItemMeta>
                <ItemTitle>{item.titulo}</ItemTitle>
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