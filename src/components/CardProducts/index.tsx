import { View, Text, Image } from "react-native"
import { styles } from "./styles"



export function CardProducts() {
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/iphone.png")} />


            <View style={styles.containerInformations}>

                <Text style={styles.textName}>Iphone 13 de 128gb</Text>
                <Text style={styles.textPrice}>R$ 3500</Text>
                <Text style={styles.textPortion}>até 8 vezes de 437,5</Text>
            </View>

        </View>
    )
}