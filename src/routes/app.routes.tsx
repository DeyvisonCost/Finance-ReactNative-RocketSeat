import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";
import { useTheme } from "styled-components";
import {MaterialIcons} from '@expo/vector-icons'
import { Platform } from "react-native";


const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  const theme = useTheme();

  return (
    <>
    
      <Navigator
        screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarStyle: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height: 78,
              }
        }}
      >
        <Screen 
            name="Listagem" 
            component={Dashboard} 
            options={{
                tabBarIcon: (({size, color}) => (
                    <MaterialIcons
                    name="format-list-bulleted"
                        size={size}
                        color={color}
                    />
                ))
            }}
        />
        <Screen 
            name="Cadastrar" 
            component={Register} 
            options={{
                tabBarIcon: (({size, color}) => (
                    <MaterialIcons
                    name="attach-money"
                        size={size}
                        color={color}
                    />
                ))
            }}
        />
        <Screen 
            name="Resumo" 
            component={Register} 
            options={{
                tabBarIcon: (({size, color}) => (
                    <MaterialIcons
                    name="pie-chart"
                        size={size}
                        color={color}
                    />
                ))
            }}  
        />
      </Navigator>
    </>
  );
};
