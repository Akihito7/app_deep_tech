import { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles"
import { THEME } from "../../THEME";

import { FontAwesome, Entypo } from '@expo/vector-icons';
import Logo from "../../../assets/logo.svg";

import { CardBestSellers } from "../CardBestSellers";
import { api } from "../../axios";
import { useProductsByCategories } from "../../contexts/ProductsByCategoriesContext";


type ProductsProps = {
    id: string;
    name: string;
    information: string;
    category: string;
    price: string;
    imagem: string;
    colors: string;
}



export function HeaderHome() {

    const [categories, setCategories] = useState<[ProductsProps]>();

    const { getProductsByCategory, categorySelected } = useProductsByCategories();

    const { navigate } = useNavigation();

    function handleToGoShoppingCart() {
        navigate("shoppingCart");
    }

    async function getCategories() {
        try {
            const response = await api.get("/products/category");
            setCategories(response.data);

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getCategories();
    }, [])

    return (

        <View style={styles.container}>

            <View style={styles.containerIcons}>
                <FontAwesome
                    name="bars"
                    size={28}
                    color={THEME.COLORS.BLUE.DARK}
                />

                <Logo />

                <TouchableOpacity onPress={handleToGoShoppingCart}>

                    <FontAwesome
                        name="shopping-cart"
                        size={28}
                        color={THEME.COLORS.BLUE.DARK}
                    />
                </TouchableOpacity>




            </View>

            <View style={styles.containerInput}>

                <TextInput
                    style={styles.input}
                    placeholder="Pesquise seu produto aqui"
                    placeholderTextColor={THEME.COLORS.GRAY.LIGHT}
                />
                <Entypo
                    name="magnifying-glass"
                    size={28}
                    color={THEME.COLORS.BLUE.DARK}
                />

            </View>

            <View style={styles.containerMoreSell}>
                <Text style={styles.textMoreSell}>Mais vendidos</Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >


                    {
                        categories && categories.map((item, index) => (
                            <CardBestSellers
                                key={index}
                                isSelected={categorySelected === item.category}
                                getProductsByCategory={() => getProductsByCategory(item.category)}


                                category={item.category}
                            />
                        ))
                    }

                </ScrollView>

            </View>
        </View>

    )
}