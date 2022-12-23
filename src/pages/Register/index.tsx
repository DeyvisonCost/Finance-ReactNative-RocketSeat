import React, { useState } from "react";
import { Modal } from "react-native";

import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

import { 
  Container, 
  Header, 
  Title, 
  Form,
  Fields,
  TransactionsTypes
} from "./style";

import { InputForm } from "../../components/Forms/InputForm";
import { useForm } from "react-hook-form";
import { CategorySelect } from "../CategorySelect";
import { CtgButton } from "../../components/Forms/CtgButton";


export const Register = () => {
 const [transactionType, setTransactionType] = useState('void');
 const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "categoria",
    icon: 'List'
  });

  const {
    control,
    handleSubmit
  } = useForm()

 const handleTransactionsTypeSelect = (type: 'up' | 'down') => {
  setTransactionType(type)
 }


 const handleOpenSelectCategoryModal = () => {
  setCategoryModalOpen(true)
 }

 const handleCloseSelectCategoryModal = () => {
  setCategoryModalOpen(false)
 }

 const handleRegister = (form) => {
  console.log(form);
 }

  return (
    <>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>

            <InputForm 
              placeholder="Name" 
              control={control}
              name="name"
            />

            <InputForm 
              placeholder="Price" 
              control={control}
              name="amount"
            />

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
            
            {/* <CategorySelectButton 
              title={category.name}
              onPress={() => console.log('???')} 
              icon={category.icon}              
              /> */}

              <CtgButton title={category.name}    //USAR ESTE BUTTON
              icon={category.icon}     
              onPress={() => console.log('???')
            }         
              />
           
          </Fields>
            <Button 
             title="ENVIAR"
             onPress={handleSubmit(handleRegister) }
           />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>

      </Container>
    </>
  );
};
