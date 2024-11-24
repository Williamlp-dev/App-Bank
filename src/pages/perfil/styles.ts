import { StyleSheet, Dimensions } from "react-native";
import Color from "@/src/constants/Color";

const { width } = Dimensions.get("window");

export const style = StyleSheet.create({
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
    backButton: {
        alignSelf: "flex-start",
        marginVertical: 10,
    },
    profileHeader: {
        alignItems: "center",
        marginVertical: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    userName: {
        fontSize: 20,
        color: "white",
        fontFamily: "MontserratSemiBold",
        marginBottom: 10,
    },
    userEmail: {
        fontSize: 14,
        color: "white",
        fontFamily: "Poppins",
        opacity: 0.8,
        marginBottom: 10,
    },
    logoutButton: {
        borderWidth: 2,
        borderColor: Color.tintColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: "transparent",
    },
    logoutText: {
        color: Color.white,
        fontSize: 14,
        fontWeight: "bold",
    },
    optionsContainer: {
        marginTop: 20,
        width: "100%",
        paddingHorizontal: 16,
    },
    optionButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#282828',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        width: "100%",
        minWidth: width * 0.8,
        marginHorizontal: "auto",
    },
    iconWrapper: {
        backgroundColor: Color.tintColor,
        padding: 10,
        borderRadius: 20,
        marginRight: 15,
    },
    optionIcon: {
        marginRight: 10,
    },
    optionDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
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

    transactionDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },

    transactionName: {
        color: Color.white,
        fontSize: 16,
        fontWeight: '600',
    },

    transactionAmount: {
        color: Color.white,
        fontSize: 16,
        fontWeight: '600',
    },
});
