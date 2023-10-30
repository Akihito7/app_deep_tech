import { StyleSheet } from "react-native";
import { THEME } from "../../THEME";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: THEME.COLORS.GRAY.MEDIUM,

        gap: RFValue(15),

        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,

        marginTop : RFValue(10),

    },

    containerImagem: {
        flexDirection : "row",
        alignItems: "center",

    },

    textRemove : {
        color : "red",
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        fontSize: 14,

    },

    containerInformation: {
        width : "100%",
        flexDirection : "row",
        alignItems : "center",
        justifyContent: "space-between"
    
    
    },

    textName: {
        width: RFPercentage(30),
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        color: THEME.COLORS.WHITE.LIGHT,
        fontSize: 16,
    },

    lineSeparator : {
        height : 1,
        backgroundColor : THEME.COLORS.WHITE.LIGHT,
    },

    textAmount: {
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        color: THEME.COLORS.WHITE.LIGHT,
        fontSize: 16,
        flex : 1,
        marginLeft : 40,
    },

    textPrice: {
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        color: THEME.COLORS.WHITE.LIGHT,
        fontSize: 16,
    }
})