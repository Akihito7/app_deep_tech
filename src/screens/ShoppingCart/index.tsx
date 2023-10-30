import { useState, useEffect, useCallback } from "react"
import { View, FlatList, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles"
import { HeaderShoppingCart } from "../../components/HeaderShoppingCart"
import { CardShoppingCart } from "../../components/CardShoppingCart";

import { getItensAsyncStorage } from "../../utils/asyncStorage"
import { THEME } from "../../THEME";
import { useFocusEffect } from "@react-navigation/native";

type itemProps = {
    id: string;
    name: string;
    information: string;
    category: string;
    price: string;
    imagem: string;
    colors: string;
};

export function ShoppingCart() {

    const [itens, setItens] = useState<[itemProps]>();

    async function getItens() {
        const itens = await getItensAsyncStorage();
        setItens(itens)
    };

    useFocusEffect(
        useCallback(() => {
            getItens()
        }, [itens])
    );


    return (
        <View style={styles.container}>
            <HeaderShoppingCart />

            <View style={styles.containerCardShopping}>
                <FlatList
                    data={itens}
                    keyExtractor={index => String(index)}

                    renderItem={({ item }) => (
                        <CardShoppingCart item={item} />
                    )}

                    ListEmptyComponent={() => (

                        <Text

                            style={{
                                marginTop: "50%",
                                fontSize: 16,
                                color: THEME.COLORS.WHITE.LIGHT,
                                fontFamily: THEME.FONTS.LATO.BOLD,

                                textAlign: "center",
                            }}
                        >
                            Ainda não há nada no carrinho, vamos comprar?
                        </Text>


                    )}


                />

            </View>

            {
                itens?.length ?

                    <TouchableOpacity
                        style={styles.buttonPayment}
                    >
                        <Text
                            style={styles.textPayment}
                        >
                            Efetuar Pagamento
                        </Text>
                    </TouchableOpacity>
                    :

                    null
            }




        </View>
    )
}
