import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Lato_700Bold } from '@expo-google-fonts/lato';

import { Home } from './src/screens/Home';
import { SellProduct } from './src/screens/SellProduct';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Lato_700Bold
  });


  return (
    <>
      {
        fontsLoaded ? <SellProduct /> : <Text>Carregando fontes</Text>
      }
    </>
  );
}

