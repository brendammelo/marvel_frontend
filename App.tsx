import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import {AppRoutes} from './src/routes/app.routes'
import theme from './src/global/styles/theme';
import {StatusBar} from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#151515'}/>
        <NavigationContainer>
          <AppRoutes/>
        </NavigationContainer>
      </ThemeProvider>

  )
}
