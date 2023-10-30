import { StyleSheet } from "react-native";
import { THEME } from "../../THEME";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.GRAY.DARK,

        flex: 1,
    },

    containerCardShopping: {
        paddingVertical: 15,
        paddingHorizontal: 12,
    },

    buttonPayment: {

        position : "absolute",
        bottom : 15,
        left : "2%",

        marginTop: 15,
        height: RFValue(60),
        width : "95%",
        
        backgroundColor: THEME.COLORS.BLUE.DARK,


        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 20,
        

    },

    textPayment: {
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.ROBOTO.BOLD,
        fontSize: 22,

    },





})