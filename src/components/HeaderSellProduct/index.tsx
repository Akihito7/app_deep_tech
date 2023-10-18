import { View } from "react-native";

import { styles } from "./style"
import { THEME } from "../../THEME";
import Logo from "../../../assets/logo.svg";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export function HeaderSellProduct() {

    return (
        <View style={styles.container}>

            <Ionicons
                name="arrow-back-outline"
                size={24}
                color={THEME.COLORS.BLUE.DARK}
            />

            <Logo />

            <FontAwesome
                name="shopping-cart"
                size={28}
                color={THEME.COLORS.BLUE.DARK}
            />

        </View>
    )
}