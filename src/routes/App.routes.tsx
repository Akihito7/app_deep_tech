import { createNativeStackNavigator } from "@react-navigation/native-stack"

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { SellProduct } from "../screens/SellProduct";
import { ShoppingCart } from "../screens/ShoppingCart";

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="sellProduct"
                component={SellProduct}
            />

            <Screen
                name="shoppingCart"
                component={ShoppingCart}
            />
        </Navigator>
    )
}