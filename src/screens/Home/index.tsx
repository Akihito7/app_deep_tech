import { View, Text } from "react-native";
import { styles } from "./styles";

import { HeaderHome } from "../../components/HeaderHome";

export function Home() {
    return (
        <View style={styles.container}>
            <HeaderHome />
        </View>
    )
}