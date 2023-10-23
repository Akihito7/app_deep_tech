import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style";
import { api } from "../../axios";


type TopOfferProps = {
    item: ProductInfoProps;
}


type ProductInfoProps = {
    id: string;
    imagem: string;
    information: string;
    category: string;
    name: string;
    price: string;
    colors: string;
};

export function TopOffer({ item }: TopOfferProps) {

    const { navigate } = useNavigation();

    function handleToGoSellProduct() {
        navigate("sellProduct", {itemId : item.id});
    }

    return (
        <TouchableOpacity onPress={handleToGoSellProduct} activeOpacity={0.5}>
            <View style={styles.container}>
                <Text
                    style={styles.textTitle}>
                    Top oferta deeptech
                </Text>

                <Image source={{
                    uri: `${api.defaults.baseURL}/files/${item.imagem}`
                }}

                    style={{
                        width: "100%",
                        height: 100,
                        objectFit: "contain",
                    }}
                />

                <View style={styles.containerInformation}>
                    <Text
                        style={styles.textName}
                        numberOfLines={3}
                    >
                        {item.name}
                    </Text>

                    <Text style={styles.textPrice}>
                        {Number(item.price).toLocaleString('pt-BR', { style: "currency", currency: "EUR" })}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}