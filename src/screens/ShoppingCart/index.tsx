import { View } from "react-native";

import { styles } from "./styles"
import { HeaderShoppingCart } from "../../components/HeaderShoppingCart"


export function ShoppingCart() {

    return (
        <View style={styles.container}>
            <HeaderShoppingCart />
        </View>
    )
}
