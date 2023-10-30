import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style"
import { THEME } from "../../THEME";
import Logo from "../../../assets/logo.svg";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export function HeaderSellProduct() {

    const { navigate, goBack } = useNavigation();

    const handleToGoBack = () => {
        goBack();
    }

    function handleToGoShoppingCart() {
        navigate("shoppingCart");
    };


    return (
        <View style={styles.container}>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={handleToGoBack}

            >
                <Ionicons
                    name="arrow-back-outline"
                    size={28}
                    color={THEME.COLORS.BLUE.DARK}
                />
            </TouchableOpacity>

            <Logo />


            <TouchableOpacity onPress={handleToGoShoppingCart}>
                <FontAwesome
                    name="shopping-cart"
                    size={28}
                    color={THEME.COLORS.BLUE.DARK}
                />

            </TouchableOpacity>

        </View>
    )
}