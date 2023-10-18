import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { THEME } from "../../THEME";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        width: RFValue(110),
        

        borderRadius: 10,

        paddingBottom: 40,
        paddingHorizontal: 5,
        marginRight: 10,

        backgroundColor: THEME.COLORS.GRAY.MEDIUM,
    },

    containerInformations: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        gap: 5,
    },

    textName: {
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        fontSize: 16,

    },

    textPrice: {
        color: "#E0E0E0",
        fontFamily: THEME.FONTS.ROBOTO.REGULAR,
        fontSize: 14,

    },

    textPortion: {
        color: "#BBBBBB",
        fontFamily: THEME.FONTS.ROBOTO.REGULAR,
        fontSize: 12,
    }




})