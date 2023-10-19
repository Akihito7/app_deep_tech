import { View, Text, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";

import { HeaderHome } from "../../components/HeaderHome";
import { CardProducts } from "../../components/CardProducts";
import { TopOffer } from "../../components/TopOffer";


const Products = ['1', '2', '3', '4', '5'];

export function Home() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <HeaderHome />


                <View style={styles.containerProducts}>
                    <FlatList
                        data={Products}
                        keyExtractor={item => item}


                        horizontal

                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <CardProducts />
                        )}
                    />




                </View>

                <Text style={styles.textTopOffer}>
                    top ofertas :
                </Text>
                <View style={styles.containerTopOffer}>

                    <TopOffer />
                    <TopOffer />
                </View>
            </ScrollView>



        </View>
    )
}