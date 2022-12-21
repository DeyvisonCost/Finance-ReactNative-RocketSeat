import React from "react";
import { 
  Container, 
  Header, 
  Title,
  Form 
} from "./style";
import { Input } from "../../components/Forms/Input/input";

export const Register = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Price" />
        </Form>
      </Container>
    </>
  );
};
