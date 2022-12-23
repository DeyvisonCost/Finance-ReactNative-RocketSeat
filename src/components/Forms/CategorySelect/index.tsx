import React from "react";
import { 
    Category, 
    Container, 
    Icon 
} from "./style";

interface Props {
  title: string;
}

export const CategorySelect = ({title}: Props) => {

    return (
        <>
            <Container>
                <Category>{title}</Category>
                <Icon name="chevron-down"/>
            </Container>
        </>
    )
}