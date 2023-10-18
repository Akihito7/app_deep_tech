import { View, Text, Image, Pressable } from "react-native";

import { styles } from "./styles";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { HeaderSellProduct } from "../../components/HeaderSellProduct";

export function SellProduct() {
    return (
        <View style={styles.container}>
            <HeaderSellProduct />

            <View style={styles.containerInfoProduct}>
                <View style={styles.containerProduct}>
                    <Image
                        source={require("../../../assets/notebook.png")}
                        style={{ height: 200, width: 200, objectFit: "contain" }}

                    />

                </View>
                <Text style={styles.textName}>
                    Processador: Intel Core i5 de 10ª geração, 2.4GHz (4 núcleos, 8 threads) | Placa Gráfica: NVIDIA GeForce MX250
                </Text>

                <Text style={styles.textColors}>
                    cor disponível: cinza e preto
                </Text>
            </View>

            <View style={styles.containerPayment}>

                <View style={styles.cardPayment}>
                    <Text style={styles.textOldPrice}>R$ 431,81</Text>
                    <Text style={styles.textCurrentPrice}>RS 1537,75</Text>

                    <View style={styles.containerPortion}>
                        <FontAwesome name="credit-card-alt" size={18} color="#B3B3B3" />
                        <Text style={styles.textPortion}>até 8x de 437,50</Text>

                    </View>

                    <View style={styles.lineSeparator}></View>

                    <Pressable>
                        <Text style={styles.textGeneric}>Mais formas de pagamentos</Text>
                    </Pressable>
                </View>

                <Pressable style={styles.buttonPayment}>
                    <FontAwesome5 name="shopping-basket" size={24} color="#B3B3B3" />
                    <Text style={styles.textPayment}>Comprar</Text>
                </Pressable>


            </View>

        </View>
    )
}