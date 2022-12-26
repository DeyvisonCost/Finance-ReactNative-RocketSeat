import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { Register } from "./src/pages/Register";
import { Dashboard } from "./src/pages/Dashboard";
import { CategorySelect } from "./src/pages/CategorySelect";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
        {/* <Register/> */}
      </ThemeProvider>
    </>
  );
}
