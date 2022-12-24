import React, { useState } from "react";
import { 
  Keyboard, 
  Modal, 
  TouchableWithoutFeedback,
  Alert 
} from "react-native";
import * as Yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"

import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./style";

import { InputForm } from "../../components/Forms/InputForm";
import { useForm } from "react-hook-form";
import { CategorySelect } from "../CategorySelect";
import { CtgButton } from "../../components/Forms/CtgButton";

interface FormData {
  name: string;
  amount: string;
}

export const Register = () => {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "categoria",
  });

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    amount: Yup.number()
      .typeError('Informe um valor numérico')
      .positive('O Valor não pode ser negativo')
      .required('O valor obrigatório')
  })
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const handleTransactionsTypeSelect = (type: "up" | "down") => {
    setTransactionType(type);
  };

  const handleOpenSelectCategoryModal = () => {
    setCategoryModalOpen(true);
  };

  const handleCloseSelectCategoryModal = () => {
    setCategoryModalOpen(false);
  };

  const handleRegister = (form: FormData) => {

    if(!transactionType){
      return Alert.alert('Selecione o tipo de transação')
    }

    if(category.key === 'category'){
      return Alert.alert('Selecione a categoria')
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.name && errors.name.message}
              />

              <InputForm
                placeholder="Price"
                control={control}
                name="amount"
                keyboardType="numeric"
                error={errors.amount && errors.amount.message}

              />

              <TransactionsTypes>
                <TransactionTypeButton
                  title={"Income"}
                  type={"up"}
                  onPress={() => handleTransactionsTypeSelect("up")}
                  isActive={transactionType === "up"}
                />
                <TransactionTypeButton
                  title={"Outcome"}
                  type={"down"}
                  onPress={() => handleTransactionsTypeSelect("down")}
                  isActive={transactionType === "down"}
                />
              </TransactionsTypes>

              <CtgButton
                title={category.name}
                onPress={handleOpenSelectCategoryModal}
              />
            </Fields>
            <Button title="ENVIAR" onPress={handleSubmit(handleRegister)} />
          </Form>

          <Modal visible={categoryModalOpen}>
            <CategorySelect
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleCloseSelectCategoryModal}
            />
          </Modal>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};
