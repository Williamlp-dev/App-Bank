import { StyleSheet, Dimensions } from "react-native";
import Color from "@/src/constants/Color";

const { height, width } = Dimensions.get("window");


const isLargeScreen = width >= 768;

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Color.BgColor,
    },
    squareContainer: {
        width: "100%",
        height: isLargeScreen ? 400 : 360,
        backgroundColor: '#282828',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 20,
        position: "relative",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 20,
        marginBottom: 20,
    },

    headerText: {
        flexDirection: "row",
        alignItems: "center",
    },


    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: '5%',
    },

    greetingText: {
        fontSize: 20,
        color: Color.white,
        paddingTop: 12,
        fontFamily: "Poppins",
    },

    giftIconContainer: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: Color.tintColor,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 70,
        zIndex: 1,
    },

    balanceContainer: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: "flex-start",
        justifyContent: "center",
    },

    balanceText: {
        fontSize: 16,
        color: Color.white,
        paddingRight: 22,
        fontFamily: "Poppins",
    },

    balanceAmount: {
        fontSize: 24,
        color: Color.white,
        fontFamily: "PoppinsSemiBold",
        marginTop: 5,
    },

    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 30,
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        width: isLargeScreen ? 80 : "20%",
        height: 90,
    },

    iconCircle: {
        backgroundColor: Color.tintColor,
        borderRadius: 50,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },

    buttonText: {
        fontSize: 12,
        fontFamily: "PoppinsSemiBold",
        color: "white",
    },


    bottomButtonsContainer: {
        marginTop: 20,
        width: "100%",
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: "space-evenly",
        paddingBottom: 20,

    },

    bottomButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Color.grayAlt,
        borderRadius: 10,
        paddingVertical: 10,
        width: "100%",
        height: "18%",
    },

    buttonLabel: {
        fontSize: 16,
        color: "white",
        fontFamily: "PoppinsSemiBold",
        marginLeft: 10,
        flex: 1,
    },

    iconStyle: {
        marginRight: 10,
        marginLeft: 10,
    },

    scannerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    scanner: {
        width: "90%",
        height: "70%",
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#ff4d4d",
        borderRadius: 5,
    },
    closeButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    closeBtn: {
        position: "absolute",
        bottom: 32,
        left: 32,
        right: 32,
    },

});
