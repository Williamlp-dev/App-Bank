import { StyleSheet } from "react-native";
import Color from "@/src/constants/Color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Color.BgColor,
    },

    squareContainer: {
        width: "100%",
        height: 250,
        backgroundColor: Color.tintColor,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 20,
        position: "relative",
    },
    arrowContainer: {
        position: "absolute",
        top: 45,
        left: 20,
        zIndex: 1,
    },
    arrowIcon: {
        width: 20,
        height: 20,
        tintColor: Color.white,
        marginTop: 0,
    },
    registerTitle: {
        fontSize: 32,
        fontFamily: "PoppinsSemiBold",
        color: Color.white,
        paddingTop: 70,
        textAlign: "left",
    },
    description: {
        fontSize: 16,
        color: Color.white,
        fontFamily: "Poppins",
        textAlign: "left",
        marginTop: 5,
    },
    inputsContainer: {
        width: "100%",
        marginTop: 55,
        paddingHorizontal: 30,
    },
    input: {
        width: "100%",
        height: 55,
        backgroundColor: "transparent",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 30,
        paddingLeft: 15,
        marginBottom: 20,
        fontSize: 16,
        color: Color.white,
    },
    signUpButton: {
        backgroundColor: Color.tintColor,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        marginTop: 20,
    },
    signUpButtonText: {
        color: "white",
        fontSize: 16,
        fontFamily: "MontserratSemiBold",
        marginRight: 10,
    },
});
