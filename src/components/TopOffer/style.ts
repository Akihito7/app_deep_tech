import { StyleSheet } from "react-native";
import { THEME } from "../../THEME";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {

        display: "flex",
        alignItems: "center",
        backgroundColor: THEME.COLORS.BLUE.DARK,
        width: RFValue(150),

        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,

        marginRight: 10,

        
    },

    containerInformation: {
        marginTop: 8,
    },

    textTitle: {
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.LATO.BOLD,
        fontSize: 16,
        marginBottom: 4,
    },

    textName: {
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.LATO.BOLD,
        fontSize: 14,
        lineHeight: 20,

        marginTop: 4,
    },

    textPrice: {
        textAlign: "center",
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.LATO.BOLD,
        fontSize: 20,
        marginTop: 8,
    }
})