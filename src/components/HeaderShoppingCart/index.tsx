import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { THEME } from "../../THEME";
import Logo from "../../../assets/logo.svg"
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export function HeaderShoppingCart() {

    const { navigate , goBack} = useNavigation();

    function handleToGoBack() {
        goBack();
    }
    return (

        <View style={styles.container}>

            <View style={styles.containerIcons}>

                <TouchableOpacity onPress={handleToGoBack}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={28}
                        color={THEME.COLORS.BLUE.DARK}
                    />

                </TouchableOpacity>

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