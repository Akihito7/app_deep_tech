import { View, Text } from "react-native";

import { styles } from "./styles";
import { HeaderSellProduct } from "../../components/HeaderSellProduct";

export function SellProduct() {
    return (
        <View style={styles.container}>
            <HeaderSellProduct />
        </View>
    )
}