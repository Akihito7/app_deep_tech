import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import { THEME } from "../../THEME"

export const styles = StyleSheet.create({
    container: {
        height: RFPercentage(22),
        backgroundColor: THEME.COLORS.GRAY.MEDIUM,

        paddingTop: 50,
        paddingHorizontal: 20,

        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },

    containerIcons: {

        display: "flex",
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",

        marginBottom : 25,

    },

    TextMyCart: {
        textAlign : "center",
        
        color : THEME.COLORS.WHITE.LIGHT,
        fontFamily : THEME.FONTS.ROBOTO.BOLD,
        fontSize : 16,
        
    }
})