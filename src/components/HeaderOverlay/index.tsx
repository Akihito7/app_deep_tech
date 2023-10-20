import { View, Text } from "react-native";

import { styles } from "./styles";
import Logo from "../../../assets/logo.svg";
import { FontAwesome, Entypo } from "@expo/vector-icons"
import { THEME } from "../../THEME";


export function HeaderOverlay() {
    return (
        <View style={styles.container}>
            <FontAwesome name="bars" size={28} color={THEME.COLORS.BLUE.DARK} />
            <Logo />
            <FontAwesome name="shopping-cart" size={28} color={THEME.COLORS.BLUE.DARK} />

        </View>
    )
}