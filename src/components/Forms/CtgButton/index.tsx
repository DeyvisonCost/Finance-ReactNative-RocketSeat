import React from "react";
import { Category, CategorySelected, Container, Icon } from "./style";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  title: string;
  icon?: string;
  onPress: () => void;
}

export const CtgButton = ({ title, onPress, ...rest }: Props) => {
  return (
    <>
      <Container onPress={onPress} >
        <CategorySelected>
          <Category>{title}</Category>
        </CategorySelected>
        <Icon name={"keyboard-arrow-down"} />
      </Container>
    </>
  );
};
