import { createNativeStackNavigator } from "@react-navigation/native-stack"

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { SellProduct } from "../screens/SellProduct";

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
        </Navigator>
    )
}