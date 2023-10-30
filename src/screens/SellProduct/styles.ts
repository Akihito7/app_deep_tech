import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { THEME } from "../../THEME";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.GRAY.DARK,
    },

    containerInfoProduct: {

        paddingHorizontal: 20,
        marginTop: 20,

        gap: 25,
    },

    containerProduct: {

        display: "flex",
        alignItems: "center",
        backgroundColor: THEME.COLORS.GRAY.MEDIUM,

        borderRadius: 10,

        paddingVertical: 20,

    },

    textName: {
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.ROBOTO.BOLD,
        fontSize: 20,

    },

    textColors: {
        color: "#BDBDBD",
        fontFamily: THEME.FONTS.ROBOTO.BOLD,
        fontSize: 14,
    },

    containerPayment: {
        flex : 1,
        marginTop: 40,
       
        display: "flex",
        justifyContent: "space-evenly",

        paddingHorizontal: 30,
        backgroundColor: THEME.COLORS.GRAY.MEDIUM,

        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },

    cardPayment: {
        height: RFValue(150),
        display: "flex",
        backgroundColor: THEME.COLORS.GRAY.DARK,
        borderRadius: 20,

        paddingHorizontal: 20,
        paddingVertical: 10,

    },

    textOldPrice: {
        color: "#B3B3B3",
        fontFamily: THEME.FONTS.ROBOTO.REGULAR,
        fontSize: 14,
        marginBottom: 10
    },

    textCurrentPrice: {
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        fontSize: 24,
        marginBottom: 5,
    },

    textPortion: {
        color: "#B3B3B3",
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        fontSize: 14,
    },

    containerPortion: {
        display: "flex",
        flexDirection: "row",

        alignItems: "center",
        gap: 10,
    },

    lineSeparator: {
        height: 1,
        backgroundColor: THEME.COLORS.WHITE.LIGHT,
        marginVertical: 15,
    },

    textGeneric: {
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        fontSize: 12,

        textAlign: "center",

    },

    buttonPayment: {
        height: RFValue(60),

        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",

        gap: 10,

        backgroundColor: THEME.COLORS.BLUE.DARK,
        borderRadius: 20,
        paddingVertical : 10,
        
    },

    textPayment: {
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.ROBOTO.BOLD,
        fontSize: 22,


    }


})