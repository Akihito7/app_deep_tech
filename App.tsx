import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Lato_700Bold } from '@expo-google-fonts/lato';

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Lato_700Bold
  });


  return (
    <>
      {
        fontsLoaded ? <Routes /> : <Text>Carregando fontes</Text>
      }
    </>
  );
}

