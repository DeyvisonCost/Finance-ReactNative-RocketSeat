import styled, {css} from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {Props} from './index'


interface ContainerProps {
  type: 'up' | 'down';
    isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps> `
  width: 48%;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  padding: 16px;

  border-width: ${({isActive}) => isActive ? 0 : 1.5}px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.text};
  border-radius: 5px;
  

  ${({isActive, type}) => isActive && type === 'up' && css`
    background-color: ${({theme}) => theme.colors.success_light}
  `}

  ${({isActive, type}) => isActive && type === 'down' && css`
    background-color: ${({theme}) => theme.colors.attention_light}
  `}
`;

export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) => 
  type === 'up' ? theme.colors.success : theme.colors.attention};
  margin-right: 12px ;

`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular} ;
  font-size: ${RFValue(14)}px;

`;