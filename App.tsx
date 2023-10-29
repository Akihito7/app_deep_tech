import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Lato_700Bold } from '@expo-google-fonts/lato';

import { Routes } from './src/routes';
import { ShoppingCart } from './src/screens/ShoppingCart';
import { ProductsByCategoriesProvider } from './src/contexts/ProductsByCategoriesContext';
import { THEME } from './src/THEME';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Lato_700Bold
  });


  return (
    <ProductsByCategoriesProvider>
      {
        fontsLoaded
          ?
          <ShoppingCart />
          :
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{
              color: THEME.COLORS.BLUE.DARK,
              fontSize: 22,
            }}>
              Carregando...
            </Text>
          </View>
      }
    </ProductsByCategoriesProvider>
  );
}

