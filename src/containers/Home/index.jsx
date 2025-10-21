import React from 'react'
import { Card, Title, Text, Actions, Button, List, Item, ItemTitle, ItemMeta, Badge } from './styles'

const Home = () => {
  const investimentos = [
    {
      titulo: 'Tesouro IPCA+ 2029',
      categoria: 'Renda Fixa',
      risco: 'Baixo',
      retorno: 'IPCA + 5.5% a.a.',
    },
    {
      titulo: 'ETF Tech (NASDAQ)',
      categoria: 'ETF',
      risco: 'Médio',
      retorno: 'Exposição setorial em tecnologia',
    },
    {
      titulo: 'FII Logístico',
      categoria: 'FIIs',
      risco: 'Médio',
      retorno: 'Dividend yield consistente',
    },
    {
      titulo: 'Blue Chip BR',
      categoria: 'Ações',
      risco: 'Médio',
      retorno: 'Foco em empresas líderes do setor',
    },
    {
      titulo: 'Small Caps BR',
      categoria: 'Ações',
      risco: 'Alto',
      retorno: 'Potencial de crescimento acelerado',
    },
  ]

  return (
    <Card>
      <Title>Investimentos promissores (negócios criados por outros usuários)</Title>
      <Text>
        Explore ideias de investimento publicadas por outros usuários. Elas podem ou não
        interessar ao seu perfil.
      </Text>

      <List>
        {investimentos.map((item, idx) => (
          <Item key={idx}>
            <ItemTitle>{item.titulo}</ItemTitle>
            <ItemMeta>
              <span>
                Categoria: <Badge>{item.categoria}</Badge>
              </span>
              <span>
                Risco: <Badge>{item.risco}</Badge>
              </span>
              <span>
                Retorno: <Badge>{item.retorno}</Badge>
              </span>
            </ItemMeta>

            <Actions>
              <Button
                type="button"
                onClick={() => alert('Em breve: detalhes do investimento.')}
                aria-label={`Saiba mais sobre ${item.titulo}`}
              >
                Saiba mais
              </Button>
            </Actions>
          </Item>
        ))}
      </List>
    </Card>
  )
}

export default Home