import { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { api } from "../../axios";
import { useProductsByCategories } from "../../contexts/ProductsByCategoriesContext";

import { styles } from "./styles"
import { THEME } from "../../THEME";
import Logo from "../../../assets/logo.svg";
import { CardBestSellers } from "../CardBestSellers";
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';

import { Controller, useForm } from "react-hook-form"
import { useContextSearchByName } from "../../contexts/ProductsByNameContext";

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
    const [showCloseIcon, setShowCloseIcon] = useState(false);

    const { getProductsByCategory, categorySelected } = useProductsByCategories();

    const { navigate } = useNavigation();

    const { control, handleSubmit, getValues, setValue } = useForm();

    const { setProductsByName } = useContextSearchByName();

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

    async function handleSearchProduct({ name }: { name: string }) {
        setShowCloseIcon(true);

        try {
            const response = await api.get(`products/by-name/${name}`);

            setProductsByName(response.data)

        } catch (error) {
            console.log("ERRO DO REQUEST BY NAME => ", error)
        }
    }

    function handleDeleteSearch(campo: string) {
        setShowCloseIcon(false);
        setValue(campo, null);
        setProductsByName([]);
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

                <Controller
                    name={"name"}
                    control={control}
                    render={({ field: { onChange, value } }) => (

                        <TextInput
                            style={styles.input}
                            placeholder="Pesquise seu produto aqui"
                            placeholderTextColor={THEME.COLORS.GRAY.LIGHT}
                            onChangeText={onChange}
                            value={value}

                        />
                    )
                    }
                />


                {
                    showCloseIcon
                        ?

                        <TouchableOpacity onPress={() => { handleDeleteSearch("name") }}>
                            <AntDesign
                                name="closecircle"
                                size={28}
                                color={THEME.COLORS.BLUE.DARK}
                            />
                        </TouchableOpacity>

                        :

                        <TouchableOpacity onPress={handleSubmit(handleSearchProduct)}>
                            <Entypo
                                name="magnifying-glass"
                                size={28}
                                color={THEME.COLORS.BLUE.DARK}
                            />
                        </TouchableOpacity>
                }




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