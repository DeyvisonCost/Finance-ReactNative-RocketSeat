import React from "react";
import { Category, Container, IconFeather } from "./style";

interface Props{
    title: string;
    icon: string;
    onPress: () => void;
}

export const CtgButton = ({title, icon, onPress}:Props) => {

    return (
        <>
            <Container onPress={onPress}>
                <Category>
                    {title}
                </Category>
                <IconFeather name={icon}/>
            </Container>
        </>
    )
}