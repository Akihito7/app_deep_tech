import { useState, useEffect, useRef } from "react"
import { View, Text, ScrollView, FlatList, ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, {
    useAnimatedStyle,
    useAnimatedScrollHandler,
    useSharedValue,
    interpolate,
    Extrapolate,
} from "react-native-reanimated"

import { RFValue } from "react-native-responsive-fontsize";

import { useProductsByCategories } from "../../contexts/ProductsByCategoriesContext";
import { useContextSearchByName } from "../../contexts/ProductsByNameContext";

import { styles } from "./styles";

import { HeaderHome } from "../../components/HeaderHome";
import { CardProducts } from "../../components/CardProducts";
import { TopOffer } from "../../components/TopOffer";
import { HeaderOverlay } from "../../components/HeaderOverlay";
import { api } from "../../axios";



type ProductsInfo = {
    id: string;
    name: string;
    information: string;
    category: string;
    price: string;
    imagem: string;
    colors: string;
};


export function Home() {

    const { navigate } = useNavigation();
    const [products, setProducts] = useState<[ProductsInfo]>();
    const [produtsTopOffer, setProductsTopOffer] = useState([]);

    const flatListRef = useRef(null);



    const { productsByCategories, isCategorySelect } = useProductsByCategories();
    const { productsByName } = useContextSearchByName();

    const sharedScrollY = useSharedValue(0);


    const animatedStyleHeaderHome = useAnimatedStyle(() => ({
        opacity: interpolate(sharedScrollY.value, [140, 180], [1, 0], Extrapolate.CLAMP)
    }));

    const animimatedStyleHeaderOverlay = useAnimatedStyle(() => ({
        position: "absolute",
        width: "100%",
        height: 90,
        zIndex: 1,
        opacity: interpolate(sharedScrollY.value, [140, 190], [0, 1], Extrapolate.CLAMP)
    }));

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            sharedScrollY.value = event.contentOffset.y;
        }
    });

    async function getProducts() {
        try {
            const response = await api.get("/products");
            setProducts(response.data);

            const PRODUCTS_APOIO = response.data;

            setProductsTopOffer([]);

            for (let i = 0; i < 2; i++) {
                setProductsTopOffer(prev => [...prev, PRODUCTS_APOIO[i]])
            };

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        const scrollToIndexZero = () => {
            if (productsByName.length > 0 && flatListRef.current) {
                flatListRef.current.scrollToIndex({ animated: true, index: 0 });
            }
            else {

                if (productsByCategories) {
                    if (productsByCategories?.length > 0 && flatListRef.current) {
                        flatListRef.current.scrollToIndex({ animated: true, index: 0 });
                    }
                }

            }
        }
        
        scrollToIndexZero();
    }, [productsByName, productsByCategories])



    return (
        <>
            <Animated.View style={[{ position: 'absolute' }, animimatedStyleHeaderOverlay]}>
                <HeaderOverlay />
            </Animated.View>

            <View style={styles.container}>
                <Animated.ScrollView onScroll={scrollHandler}>

                    <Animated.View style={animatedStyleHeaderHome}>
                        <HeaderHome />
                    </Animated.View>



                    <View style={styles.containerProducts}>

                        <View style={{ height: RFValue(230) }}>

                            {
                                productsByName.length > 0 ?
                                    <FlatList
                                        ref={flatListRef}
                                        data={productsByName}
                                        keyExtractor={item => item.id}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item, index }) => (
                                            <CardProducts
                                                index={index}
                                                productInfo={item}
                                            />
                                        )}
                                    />
                                    :
                                    isCategorySelect ?
                                        <FlatList
                                            ref={flatListRef}
                                            data={productsByCategories}
                                            keyExtractor={item => item.id}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item, index }) => (
                                                <CardProducts
                                                    index={index}
                                                    productInfo={item}
                                                />
                                            )}
                                        />
                                        :
                                        <FlatList
                                            data={products}
                                            keyExtractor={item => item.id}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item, index }) => (
                                                <CardProducts
                                                    index={index}
                                                    productInfo={item}
                                                />
                                            )}
                                        />
                            }


                        </View>


                    </View>

                    <Text style={styles.textTopOffer}>
                        top ofertas :
                    </Text>

                    <View style={styles.containerTopOffer}>

                        {
                            produtsTopOffer?.map((item, index) => (
                                <TopOffer key={index} item={item} />
                            ))
                        }
                    </View>

                    <Text style={styles.youCanLikeThisText}>
                        voce pode gostar :
                    </Text>

                    <View style={[styles.containerProducts, { paddingTop: 0 }]}>
                        <FlatList
                            data={products}
                            keyExtractor={item => item.id}


                            horizontal

                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                            (
                                <CardProducts
                                    index={index}
                                    productInfo={item}
                                />
                            )}
                        />

                    </View>

                </Animated.ScrollView>



            </View>
        </>
    )
}