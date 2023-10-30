import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { THEME } from "../../THEME";

export const styles = StyleSheet.create({
    container: {
       
        height: RFPercentage(39),
        backgroundColor: THEME.COLORS.GRAY.MEDIUM,

        paddingTop: 75,
        paddingHorizontal: 20,

        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        
    },

    containerIcons: {
        display: "flex",
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",

    },

    containerInput : {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        
        borderWidth: 1,
        borderColor: THEME.COLORS.WHITE.LIGHT,
        borderRadius: 50,
        
        paddingHorizontal: 8,
        marginTop: 15,
    },

    input : {
        flex: 1,
        borderRadius: 10,
        padding: 8,

        fontSize: 16,
        color: "white"

    },

    containerMoreSell : {
        marginTop: 25,

    },

    textMoreSell : {
        fontSize: 16,
        color: THEME.COLORS.WHITE.LIGHT,

        textAlign: "center",

    }

    
})