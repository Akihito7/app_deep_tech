import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';
import { api } from "../../axios";



import { styles } from "./styles";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { HeaderSellProduct } from "../../components/HeaderSellProduct";

import { setItemAsyncStorage } from "../../utils/asyncStorage";

type ItemProps = {
    id: string;
    imagem: string;
    information: string;
    category: string;
    name: string;
    price: string;
    colors: string;
};

export function SellProduct() {

    const [item, setItem] = useState({} as ItemProps);

    const routeParams = useRoute();
    const idItem = routeParams.params.itemId;


    async function getItem() {
        try {
            const response = await api.get(`/products/${idItem}`)
            setItem(response.data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getItem();
    }, []);

    return (
        <View style={styles.container}>
            <HeaderSellProduct />

            <View style={styles.containerInfoProduct}>
                <View style={styles.containerProduct}>
                    <Image
                        source={{
                            uri: `${api.defaults.baseURL}/files/${item.imagem}`
                        }}
                        style={{ height: 200, width: 200, objectFit: "contain" }}

                    />

                </View>
                <Text style={styles.textName}>
                    {item.name}
                </Text>

                <Text style={styles.textColors}>
                    cor disponível: {item.colors}
                </Text>
            </View>

            <View style={styles.containerPayment}>

                <View style={styles.cardPayment}>
                    <Text style={styles.textOldPrice}>
                        {(Number(item.price) - 199).toLocaleString("pt-BR", {
                            style: "currency", currency: "EUR"
                        })}
                    </Text>
                    <Text style={styles.textCurrentPrice}>

                        {Number(item.price).toLocaleString("pt-BR", {
                            style: "currency", currency: "EUR"
                        })}
                    </Text>

                    <View style={styles.containerPortion}>
                        <FontAwesome name="credit-card-alt" size={18} color="#B3B3B3" />
                        <Text style={styles.textPortion}>até 8x {Number(item.price) / 8}</Text>

                    </View>

                    <View style={styles.lineSeparator}></View>

                    <TouchableOpacity>
                        <Text style={styles.textGeneric}>Mais formas de pagamentos</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.buttonPayment}
                    onPress={() => setItemAsyncStorage(item)}
                >
                    <FontAwesome5 name="shopping-basket" size={24} color="#B3B3B3" />
                    <Text style={styles.textPayment}>Comprar</Text>
                </TouchableOpacity>


            </View>

        </View>
    )
}