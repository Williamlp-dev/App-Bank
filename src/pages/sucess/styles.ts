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
        paddingHorizontal: 12,
        marginBottom: 50,
        lineHeight: 24,
        letterSpacing: 0.5,
    },


    button: {
        backgroundColor: Color.tintColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 80,
        borderRadius: 25,
        marginTop: 0,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'MontserratSemiBold',
        marginRight: 15,
    },

});
