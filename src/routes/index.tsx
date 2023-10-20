import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { AppRoutes } from "./App.routes"
import { THEME } from "../THEME"
export function Routes() {
    return (

        <View style={{ flex: 1, backgroundColor: THEME.COLORS.GRAY.DARK }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}

