import { StyleSheet } from "react-native";
import { THEME } from "../../THEME";

export const styles = StyleSheet.create({
    container : {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent : "space-between",

        backgroundColor: THEME.COLORS.GRAY.MEDIUM,

        paddingTop: 50,
        paddingHorizontal: 20,

        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    }
})