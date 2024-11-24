import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";
import Color from "@/src/constants/Color";

type IconName = "home" | "subscriptions" | "music-note" | "shopping-cart" | "shopping-bag" | "electric-bolt";

interface Transaction {
    id: number;
    name: string;
    date: string;
    amount: number;
    icon: IconName;
}

export default function Extrato() {
    const [activeButton, setActiveButton] = useState<number>(1);
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);

    // Dados das transações (garantindo que os valores de 'amount' são números)
    const transactions: Transaction[] = [
        { id: 1, name: 'AirBnB Rent', date: '21:02 AM', amount: 50.00, icon: 'home' as IconName },
        { id: 2, name: 'Netflix', date: '9:12 AM', amount: 15.00, icon: 'subscriptions' as IconName },
        { id: 3, name: 'Spotify', date: '13:42 AM', amount: 9.99, icon: 'music-note' as IconName },
        { id: 4, name: 'Amazon Purchase', date: '12:35 AM', amount: 120.50, icon: 'shopping-cart' as IconName },
        { id: 5, name: 'Online Shopping', date: '4:54 AM', amount: 45.00, icon: 'shopping-bag' as IconName },
        { id: 6, name: 'Utility Bill', date: '2:31 AM', amount: -60.00, icon: 'electric-bolt' as IconName },
    ];

    const filterTransactions = (buttonId: number) => {
        setActiveButton(buttonId);
        let filtered: Transaction[] = [];

        if (buttonId === 1) {
            filtered = transactions;
        } else if (buttonId === 2) {
            filtered = transactions.filter(t => t.amount > 0);
        } else if (buttonId === 3) {
            filtered = transactions.filter(t => t.amount < 0);
        }

        setFilteredTransactions(filtered);
    };

    useEffect(() => {
        filterTransactions(1);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.squareContainer}>
                    <Text style={styles.textExtrato}>Extrato De Transações</Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, activeButton === 1 && styles.activeButton]}
                            onPress={() => filterTransactions(1)}
                        >
                            <Text style={[styles.buttonText, activeButton === 1 ? styles.activeButtonText : null]}>
                                Todas
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, activeButton === 2 && styles.activeButton]}
                            onPress={() => filterTransactions(2)}
                        >
                            <Text style={[styles.buttonText, activeButton === 2 ? styles.activeButtonText : null]}>
                                Entradas
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, activeButton === 3 && styles.activeButton]}
                            onPress={() => filterTransactions(3)}
                        >
                            <Text style={[styles.buttonText, activeButton === 3 ? styles.activeButtonText : null]}>
                                Saídas
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.servicesContainer}>
                    <Text style={styles.TextHeader}>July 30, 2024</Text>
                </View>

                <View style={styles.transactionsContainer}>
                    {filteredTransactions.map((item) => (
                        <View key={item.id} style={styles.transactionItem}>
                            <View style={styles.iconWrapper}>
                                <MaterialIcons name={item.icon} size={22} color={Color.white} />
                            </View>
                            <View style={styles.transactionDetails}>
                                <View>
                                    <Text style={styles.transactionName}>{item.name}</Text>
                                    <Text style={styles.transactionDate}>{item.date}</Text>
                                </View>
                                <Text style={styles.transactionAmount}>
                                    {typeof item.amount === 'number'
                                        ? (item.amount < 0
                                            ? `- $${Math.abs(item.amount).toFixed(2)}`
                                            : `$${item.amount.toFixed(2)}`)
                                        : `$${item.amount}`}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}