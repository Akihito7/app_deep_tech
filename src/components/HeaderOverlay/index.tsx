import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import Logo from "../../../assets/logo.svg";
import { FontAwesome, Entypo } from "@expo/vector-icons"
import { THEME } from "../../THEME";


export function HeaderOverlay() {

    const { navigate } = useNavigation();

    function handleToGoShoppingCart() {
        navigate("shoppingCart");
    }

    return (
        <View style={styles.container}>

            <FontAwesome
                size={28}
                name="bars"
                color={THEME.COLORS.BLUE.DARK}
            />

            <Logo />

            <TouchableOpacity onPress={handleToGoShoppingCart}>
                <FontAwesome
                    size={28}
                    name="shopping-cart"
                    color={THEME.COLORS.BLUE.DARK}
                />

            </TouchableOpacity>

        </View>
    )
}