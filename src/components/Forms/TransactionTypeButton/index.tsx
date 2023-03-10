import React from "react";
import { TouchableOpacityProps } from "react-native";
import { 
    Container,
    Icon,
    Title
 } from "./style";

 const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
 }

 export interface Props extends TouchableOpacityProps{
    title: string;
    type: 'up' | 'down';
    isActive: boolean;
 }

export const TransactionTypeButton = ({
    title, 
    type, 
    isActive, 
    ...rest
}: Props) => {

    return (
        <>
         <Container 
            {...rest} 
            type={type}
            isActive={isActive}
            >
            <Icon 
                name={icons[type]}
                type={type}
            />
            <Title>
                {title}
            </Title>
         </Container>
        </>
    )
}