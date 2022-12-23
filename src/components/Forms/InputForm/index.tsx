import React from "react";
import { Container } from "./style";
import { Input } from "../Input";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export const InputForm = ({ control, name, ...rest }: Props) => {
  return (
    <>
      <Container>
        <Controller
          control={control}
          render={({ field: { 
            onChange, 
            value 
            } }) => (
            <Input 
             onChangeText={onChange} 
             value={value}  
             {...rest} 
            />
          )}
          name={name}
        ></Controller>
      </Container>
    </>
  );
};
