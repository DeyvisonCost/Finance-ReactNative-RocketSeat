import React from 'react'

import { 
    Container,
    Header,
    Title,
    Icon,
    Footer, 
    Amount,
    LastTransaction
} from './styles'

export const HighlightCard = () => {
  return (
    <Container>
        <Header>
            <Title>Entrada</Title>
            <Icon name="arrow-up-circle"/>
        </Header>

        <Footer>
            <Amount>R$ 50.000</Amount>
            <LastTransaction>Última entrada dia x</LastTransaction>
        </Footer>

    </Container>
  )
}
