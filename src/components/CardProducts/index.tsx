import { View, Text, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { api } from "../../axios";

import { styles } from "./styles"
import Animated, { FadeInUp } from "react-native-reanimated";



type CardProductsProps = {
    productInfo: ProductInfoProps;
    index: number;
}


type ProductInfoProps = {
    id: string;
    imagem: string;
    information: string;
    name: string;
    price: string;
    colors: string;
};


export function CardProducts({ productInfo, index }: CardProductsProps) {

    const PORTION_PRICE = (Number(productInfo.price) / 8).toLocaleString("pt-BR", {
        style: "currency", currency: "EUR"
    });

    const { navigate } = useNavigation();

    const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

    function handleToGoSellProduct() {
        navigate("sellProduct", {
            itemId: productInfo.id
        });
    }

    console.log(index)

    return (

        <TouchableOpacityAnimated
            entering={FadeInUp.delay(index * 100)}
            activeOpacity={0.5}
            onPress={handleToGoSellProduct}
        >
            <View style={styles.container}>
                <Image source={{ uri: `${api.defaults.baseURL}/files/${productInfo.imagem}` }}

                    height={100}
                    width={100}

                    style={{

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
        </TouchableOpacityAnimated>
    )
}