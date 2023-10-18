import { View, Text } from "react-native";
import { styles } from "./styles";

import { HeaderHome } from "../../components/HeaderHome";
import { CardProducts } from "../../components/CardProducts";

export function Home() {
    return (
        <View style={styles.container}>
            <HeaderHome />

            <View>
                <CardProducts />
            </View>



        </View>
    )
}