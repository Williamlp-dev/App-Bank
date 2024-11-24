import Color from "@/src/constants/Color";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BgColor,
        paddingHorizontal: 20,
    },

    logo: {
        width: 100,
        height: 100,
        top: -20,
    },

    image: {
        width: '90%',
        height: undefined,
        marginTop: 40,
        aspectRatio: 1,
        marginVertical: 10,
    },

    title: {
        fontSize: 24,
        fontFamily: 'PoppinsSemiBold',
        color: Color.white,
        paddingHorizontal: 32,
        textAlign: 'center',
        marginBottom: 10,
        letterSpacing: 1,
    },

    description: {
        fontSize: 16,
        color: Color.white,
        fontFamily: 'Poppins',
        textAlign: 'center',
        paddingHorizontal: 64,
        marginBottom: 30,
        lineHeight: 24,
        letterSpacing: 0.5,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        maxWidth: 350,
        marginTop: 20,
    },

    button: {
        backgroundColor: Color.tintColor,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
    },

    buttonText: {
        color: Color.white,
        fontSize: 16,
        fontFamily: 'MontserratSemiBold'
    },

    RegisterButton: {
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: Color.tintColor,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
    },

    RegisterButtonText: {
        color: Color.white,
        fontSize: 16,
        fontFamily: 'MontserratSemiBold',
    },
});
