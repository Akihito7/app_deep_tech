import { View, Text, Image } from "react-native";

import { styles } from "./style";

export function TopOffer() {
    return (
        <View style={styles.container}>
            <Text
                style={styles.textTitle}>
                Top oferta deeptech
            </Text>
            
            <Image source={require("../../../assets/notebook.png")} />

            <View style={styles.containerInformation}>
                <Text
                    style={styles.textName}>
                    Notebook HD, 8G RAM 8GB RAM Notebook 128GB SSD
                </Text>

                <Text style={styles.textPrice}>
                    R$ 1537,75
                </Text>
            </View>

        </View>
    )
}