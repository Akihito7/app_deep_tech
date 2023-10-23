import { StyleSheet } from "react-native";
import { THEME } from "../../THEME";


export const styles = StyleSheet.create({
    container: {

        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,

        marginTop: 15,
        marginRight: 8,
        borderWidth: 1,
        borderColor : THEME.COLORS.BLUE.DARK,



        backgroundColor: THEME.COLORS.BLUE.DARK,
    },

    text: {
       
        color: THEME.COLORS.WHITE.LIGHT,
        fontFamily: THEME.FONTS.ROBOTO.MEDIUM,
        textTransform: "uppercase",

    }
})