import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export const Dashboard = () => {

  const data = [
    {
      id: '1',
      type: 'positive',
      title: "Salary",
      amount: "R$ 28.000,00",
      category:{
        name: 'Job',
        icon: 'dollar-sign'
      },
      date:'02/07/2023'
    },
    {
      id: '2',
      type: 'negative',
      title: "Shopping",
      amount: "R$ 2.000,00",
      category:{
        name: 'Store',
        icon: 'shopping-bag'
      },
      date:'11/12/2022'
    },
    {
      id: '3',
      type: 'negative',
      title: "Fuel",
      amount: "R$ 350,00",
      category:{
        name: 'Gas station',
        icon: 'truck'
      },
      date:'07/12/2023'
    },
    {
      id: '4',
      type: 'positive',
      title: "Freelance",
      amount: "R$ 2.000,00",
      category:{
        name: 'Sales',
        icon: 'dollar-sign'
      },
      date:'28/11/2022'
    }
  ];

  return (
    <>
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <Photo
                source={{
                  uri: "https://avatars.githubusercontent.com/u/80866334?v=4",
                }}
              />
              <User>
                <UserGreeting>Olá, </UserGreeting>
                <UserName>Deyvison</UserName>
              </User>
            </UserInfo>
            <Icon name="power" />
          </UserWrapper>
        </Header>

        <HighlightCards>
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
        </HighlightCards>

        <Transactions>
          <Title>Lista</Title>

          <TransactionList 
            data={data}
            renderItem={({item}) => <TransactionCard data={item}/>}
          />

        </Transactions>
      </Container>
    </>
  );
};
