import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../THEME";

type CardBestSellersProps = {
    category: string;
    getProductsByCategory: () => void;
    isSelected: boolean;
}

export function CardBestSellers({
    category,
    getProductsByCategory,
    isSelected,
}: CardBestSellersProps) {
    return (
        <TouchableOpacity onPress={getProductsByCategory}>
            <View style={[styles.container,
            isSelected ?
                {
                    borderColor : THEME.COLORS.BLUE.DARK,
                    borderWidth : 1,
                    backgroundColor : THEME.COLORS.GRAY.MEDIUM,

                    
                }
                : null
            ]}>
                <Text
                    style={styles.text}

                >
                    {category}
                </Text>
            </View>
        </TouchableOpacity>
    )
}