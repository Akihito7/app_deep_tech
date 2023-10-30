
import { TouchableOpacity, View, Image, Text } from "react-native";

import { deleteItemAsyncStorage } from "../../utils/asyncStorage";

import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";


type ItemProps = {
    id: string;
    name: string;
    information: string;
    category: string;
    price: string;
    imagem: string;
    colors: string;
};

type CardShopping = {
    item: ItemProps,

}

export function CardShoppingCart({ item }: CardShopping) {

    function handleDeleteItem(idItem: string) {
        deleteItemAsyncStorage(idItem)
    }


    return (

        <View style={styles.container}>



            <View style={styles.containerImagem}>

                <Image
                    source={require("../../../assets/notebook.png")}
                    style={{ marginRight: 30, }}
                />

                <Text
                    style={styles.textName}
                    numberOfLines={3}
                >
                    {item.name}
                </Text>
            </View>

            <View style={styles.lineSeparator}></View>

            <View style={styles.containerInformation}>

                <TouchableOpacity
                    onPress={() => {
                        handleDeleteItem(item.id)
                    }}
                    activeOpacity={0.5}
                >
                    <Text style={styles.textRemove}>Remover</Text>
                </TouchableOpacity>

                <Text style={styles.textPrice}>
                    {Number(item.price).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "EUR"
                    })}
                </Text>

            </View>


        </View>



    )
}