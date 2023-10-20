import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"


type CardProductsProps = {
    handleToGoSellProduct(): void;
}

export function CardProducts({ handleToGoSellProduct }: CardProductsProps) {
    return (

        <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleToGoSellProduct}
        >
            <View style={styles.container}>
                <Image source={require("../../../assets/iphone.png")} />


                <View style={styles.containerInformations}>

                    <Text style={styles.textName}>Iphone 13 de 128gb</Text>
                    <Text style={styles.textPrice}>R$ 3500</Text>
                    <Text style={styles.textPortion}>até 8 vezes de 437,50</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}