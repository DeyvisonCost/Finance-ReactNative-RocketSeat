import React from "react";
import { 
    Category,
    Container, 
    Footer, 
    Header, 
    Icon, 
    Name, 
    Separator, 
    Title 
} from "./style";
import { FlatList } from "react-native";
import { categories } from "../../utils/categories";
import { Button } from "../../components/Forms/Button";

interface CategoryProps {
    key: string
    name: string
    icon: string
  }
  interface Props {
    title?: string;
    category?: CategoryProps
    setCategory?: (category: CategoryProps) => void
    closeSelectCategory?: () => void
  }

export const CategorySelect = ({
    title,
    category,
    setCategory,
    closeSelectCategory
}: Props) => {

    return (
        <>
            <Container>
                <Header>
                    <Title>
                        Categoria
                    </Title>
                </Header>

                <FlatList
                   data={categories} 
                   style={{flex: 1, width: '100%'}}
                   keyExtractor={(item) => item.key}
                   renderItem={({item}) =>(
                    <Category>
                        <Icon name={item.icon}/>
                        <Name>{item.name}</Name>
                    </Category>
                   )}
                   ItemSeparatorComponent={() =><Separator/>}
                />

                <Footer>
                    <Button title="Selecionar"/>
                </Footer>
            </Container>
        </>
    )
}