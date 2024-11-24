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
        justifyContent: "flex-start",
        backgroundColor: Color.BgColor,
    },
    squareContainer: {
        width: "100%",
        height: 180,
        backgroundColor: Color.tintColor,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 20,
        position: "relative",
    },

    textExtrato: {
        fontSize: 16,
        fontFamily: 'PoppinsSemiBold',
        color: Color.white,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-around",
        width: "100%",
    },
    button: {
        flex: 0.3,
        marginRight: 10,
        marginLeft: 10,
        paddingVertical: 10,
        borderWidth: 2,
        borderColor: Color.white,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    buttonText: {
        fontSize: 14,
        fontFamily: "PoppinsMedium",
        color: Color.white,
    },
    activeButton: {
        backgroundColor: Color.white,
    },
    activeButtonText: {
        color: Color.tintColor,
    },
    servicesContainer: {
        width: '100%',
        alignItems: 'flex-start',
        marginLeft: 10,
        paddingHorizontal: 25,
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
        backgroundColor: Color.BgColor,
        padding: 10,
        borderRadius: 10,
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
    TextHeader: {
        fontSize: 18,
        fontFamily: 'MontserratSemiBold',
        color: Color.white,
        marginTop: 20,
    },


});
