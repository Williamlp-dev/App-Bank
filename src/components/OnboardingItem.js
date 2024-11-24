import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";
import Color from "../constants/Color";

export default OnboardingItem = ({ item }) => {

    const { width } = useWindowDimensions();

    return (

        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        flex: 0.7,
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 24,
        marginBottom: 8,
        color: Color.white,
        textAlign: 'center',
        paddingHorizontal: 32,
        letterSpacing: 1,
    },

    description: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: Color.white,
        textAlign: 'center',
        paddingHorizontal: 64,
        letterSpacing: 0.5,


    }

})