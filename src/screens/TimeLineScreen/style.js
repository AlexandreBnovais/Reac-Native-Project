import { Background } from "@react-navigation/elements";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: 'auto',
        height: 200,
        marginVertical: 20,
        borderRadius: 20
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20

    },
    overlay: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})