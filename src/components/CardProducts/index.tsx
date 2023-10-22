import { View, Text, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"
import { api } from "../../axios";


type CardProductsProps = {
    productInfo: ProductInfoProps;
}


type ProductInfoProps = {
    id: string;
    imagem: string;
    information: string;
    name: string;
    price: string;
    colors: string;
};


export function CardProducts({ productInfo }: CardProductsProps) {

    const PORTION_PRICE = (Number(productInfo.price) / 8).toLocaleString("pt-BR", {
        style: "currency", currency: "EUR"
    });

    const { navigate } = useNavigation();

    function handleToGoSellProduct() {
        navigate("sellProduct", {
            itemId : productInfo.id
        });
    }

    return (

        <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleToGoSellProduct}
        >
            <View style={styles.container}>
                <Image source={{ uri: `${api.defaults.baseURL}/files/${productInfo.imagem}` }}

                    style={{
                        width: "100%",
                        height: 100,
                        objectFit: "contain",
                        marginVertical: 10,
                        marginHorizontal: 2,
                    }}
                />


                <View style={styles.containerInformations}>

                    <Text
                        style={styles.textName}
                        numberOfLines={2}
                    >
                        {productInfo.name}
                    </Text>
                    <Text
                        style={styles.textPrice}

                    >
                        {Number(productInfo.price).toLocaleString("pt-BR", {
                            style: "currency", currency: "EUR"
                        })}
                    </Text>
                    <Text
                        style={styles.textPortion}>{`até 8 x de ${PORTION_PRICE}`}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}