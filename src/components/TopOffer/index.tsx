import { View, Text, Image } from "react-native";

import { styles } from "./style";
import { api } from "../../axios";


type TopOfferProps = {
    item: ProductInfoProps;
}


type ProductInfoProps = {
    imagem: string;
    information: string;
    name: string;
    price: string;
    colors: string;
};

export function TopOffer({ item }: TopOfferProps) {
    return (
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
    )
}