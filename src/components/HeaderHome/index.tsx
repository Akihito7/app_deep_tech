import { View, Text, TextInput, ScrollView, } from "react-native";

import { styles } from "./styles"
import { THEME } from "../../THEME";

import { FontAwesome, Entypo } from '@expo/vector-icons';
import Logo from "../../../assets/logo.svg";

import { CardBestSellers } from "../CardBestSellers";

export function HeaderHome() {

    return (
        <View style={styles.container}>

            <View style={styles.containerIcons}>
                <FontAwesome
                    name="bars"
                    size={28}
                    color={THEME.COLORS.BLUE.DARK}
                />

                <Logo />

                <FontAwesome
                    name="shopping-cart"
                    size={28}
                    color={THEME.COLORS.BLUE.DARK}
                />

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
                   <CardBestSellers />
                   <CardBestSellers />
                   <CardBestSellers />
                   <CardBestSellers />
                   <CardBestSellers />
                   <CardBestSellers />
                   <CardBestSellers />
                </ScrollView>

            </View>
        </View>
    )
}