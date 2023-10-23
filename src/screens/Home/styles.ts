import { StyleSheet } from "react-native";
import { THEME } from "../../THEME";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: THEME.COLORS.GRAY.DARK,

        paddingBottom: 10,
    },

    containerProducts: {
        paddingVertical: 15,
        paddingHorizontal: 12,
    },

    textTopOffer: {
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        fontSize: 16,

        paddingHorizontal: 12,
    

       paddingBottom: 11,
    },

    containerTopOffer: {
        display: "flex",
        flexDirection: "row",

        justifyContent: "space-between",
        paddingHorizontal: 12,
    },

    youCanLikeThisText : {
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        fontSize: 16,

        paddingHorizontal: 12,
    
       marginTop: 40 ,
       paddingBottom: 11,
    }

})