import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Caard({ title, children }) {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            {children && <View style={styles.cardContent}>{children}</View>}
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#2e2e2e',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
    },
    cardTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardContent: {
        marginTop: 10,
        color: 'white',
        fontSize: 16,
    },
});
