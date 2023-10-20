import { StyleSheet } from "react-native";
import { THEME } from "../../THEME";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        display: "flex",
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",

        paddingTop: 50,
        paddingHorizontal: 20,

        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,

        backgroundColor: THEME.COLORS.GRAY.MEDIUM,

        width: "100%",
    },

})