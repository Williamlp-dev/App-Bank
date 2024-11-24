import { StyleSheet } from "react-native";
import Color from "@/src/constants/Color";

export const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
        backgroundColor: Color.BgColor,
    },
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Color.BgColor,
    },

    squareContainer: {
        marginTop: 20,
        marginBottom: 20,
        width: '80%',
        height: 200,
        backgroundColor: '#282828',
        borderRadius: 30,
    },

    servicesContainer: {
        width: '100%',
        alignItems: 'flex-start',
        marginLeft: 10,
        paddingHorizontal: 25,
    },

    TextHeader: {
        fontSize: 18,
        fontFamily: 'MontserratSemiBold',
        color: Color.white,
        marginTop: 10,
    },

    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 25,
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: 90,
    },

    iconCircle: {
        backgroundColor: Color.tintColor,
        borderRadius: 20,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },

    buttonText: {
        fontSize: 12,
        fontFamily: "PoppinsSemiBold",
        color: "white",
    },

    transactionsContainer: {
        width: '100%',
        paddingHorizontal: 25,
        marginTop: 10,
    },

    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#282828',
        borderRadius: 10,
    },

    iconWrapper: {
        backgroundColor: Color.tintColor,
        padding: 10,
        borderRadius: 20,
        marginRight: 15,
    },

    transactionDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    transactionName: {
        color: Color.white,
        fontSize: 16,
        fontWeight: '600',
    },

    transactionDate: {
        color: Color.white,
        fontSize: 12,
        opacity: 0.7,
    },

    transactionAmount: {
        color: Color.white,
        fontSize: 16,
        fontWeight: '600',
    },


});
