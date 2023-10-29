import { View, Text } from "react-native";

import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import Logo from "../../../assets/logo.svg"
import { THEME } from "../../THEME";

export function HeaderShoppingCart() {
    return (

        <View style={styles.container}>

            <View style={styles.containerIcons}>
                <FontAwesome
                    name="bars"
                    size={28}
                    color={THEME.COLORS.BLUE.DARK}
                />

                <Logo />

                <FontAwesome
                    name="shopping-cart"
                    size={28}
                    color="transparent"
                />

            </View>

            <Text style={styles.TextMyCart}>
                Meu carrinho
            </Text>
        </View>
    )
}