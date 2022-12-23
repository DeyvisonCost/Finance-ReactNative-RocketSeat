import React, { useState } from "react";
import { 
  Container, 
  Header, 
  Title, 
  Form,
  Fields,
  TransactionsTypes
} from "./style";
import { Input } from "../../components/Forms/Input/input";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelect } from "../../components/Forms/CategorySelect";


export const Register = () => {
 const [transactionType, setTransactionType] = useState('void');

 const handleTransactionsTypeSelect = (type: 'up' | 'down') => {
  setTransactionType(type)
 }

  return (
    <>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <Input placeholder="Name" />
            <Input placeholder="Price" />
            <TransactionsTypes>
              <TransactionTypeButton 
                title={"Income"} 
                type={"up"}
                onPress={() => handleTransactionsTypeSelect('up')}
                isActive={transactionType === 'up'}
              />
              <TransactionTypeButton 
                title={"Outcome"} 
                type={"down"}
                onPress={() => handleTransactionsTypeSelect('down')}
                isActive={transactionType === 'down'}
              />
            </TransactionsTypes>
            <CategorySelect title="Categoria"/>
           
          </Fields>
            <Button title="ENVIAR" />
        </Form>
      </Container>
    </>
  );
};
