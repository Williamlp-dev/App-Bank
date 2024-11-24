import React from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { FlipCard } from '@/src/components/FlipCard';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from "@/src/constants/Color";
import { styles } from './styles';

type IconName = "home" | "subscriptions" | "music-note" | "shopping-cart" | "shopping-bag" | "electric-bolt";

const transactions = [
    { id: 1, name: 'AirBnB Rent', date: '21 Nov', amount: '50.00', icon: 'home' as IconName },
    { id: 2, name: 'Netflix', date: '20 Nov', amount: '15.00', icon: 'subscriptions' as IconName },
    { id: 3, name: 'Spotify', date: '18 Nov', amount: '9.99', icon: 'music-note' as IconName },
    { id: 4, name: 'Amazon Purchase', date: '15 Nov', amount: '120.50', icon: 'shopping-cart' as IconName },
    { id: 5, name: 'Online Shopping', date: '14 Nov', amount: '45.00', icon: 'shopping-bag' as IconName },
    { id: 6, name: 'Utility Bill', date: '13 Nov', amount: '60.00', icon: 'electric-bolt' as IconName },
];

export default function Card() {
    type IconNames = 'Pix' | 'Qr Code' | 'Escanear' | 'Pagar';

    const iconMap: Record<IconNames, keyof typeof MaterialIcons.glyphMap> = {
        Pix: 'credit-card',
        'Qr Code': 'qr-code',
        Escanear: 'camera-alt',
        Pagar: 'payment',
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.squareContainer}>
                    <FlipCard />
                </View>

                <View>
                    <View style={styles.servicesContainer}>
                        <Text style={styles.TextHeader}>Service</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        {['Pix', 'Qr Code', 'Escanear', 'Pagar'].map((iconName, index) => (
                            <TouchableOpacity key={index} style={styles.button}>
                                <View style={styles.iconCircle}>
                                    <MaterialIcons name={iconMap[iconName as IconNames]} size={24} color={"white"} />
                                </View>
                                <Text style={styles.buttonText}>{iconName.charAt(0).toUpperCase() + iconName.slice(1)}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.servicesContainer}>
                    <Text style={styles.TextHeader}>Recent Transictions</Text>
                </View>

                <View style={styles.transactionsContainer}>
                    {transactions.map((item) => (
                        <View key={item.id} style={styles.transactionItem}>
                            <View style={styles.iconWrapper}>
                                <MaterialIcons name={item.icon} size={22} color={Colors.white} />
                            </View>
                            <View style={styles.transactionDetails}>
                                <View>
                                    <Text style={styles.transactionName}>{item.name}</Text>
                                    <Text style={styles.transactionDate}>{item.date}</Text>
                                </View>
                                <Text style={styles.transactionAmount}>${item.amount}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
