import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import HeaderImg from "@/assets/Logo.jpg";
import { style } from "./styles";
import Color from "@/src/constants/Color";

type IconName = "home" | "subscriptions" | "music-note" | "shopping-cart" | "shopping-bag" | "electric-bolt";

const transactions = [
    { id: 1, name: 'Minhas Informações', icon: 'manage-accounts' as IconName },
    { id: 2, name: 'Cartão', icon: 'credit-card' as IconName },
    { id: 3, name: 'Lixo Coletado', icon: 'assessment' as IconName },
    { id: 4, name: 'Alterar Senha', icon: 'key' as IconName },
    { id: 5, name: 'Suporte', icon: 'help' as IconName },
    { id: 6, name: 'Sobre', icon: 'aod' as IconName },
];

export default function Profile() {
    return (
        <ScrollView contentContainerStyle={style.scrollContainer}>
            <View style={style.container}>
                <View style={style.profileHeader}>
                    <Image source={HeaderImg} style={style.profileImage} />
                    <Text style={style.userName}>Otavio Balelas</Text>
                    <Text style={style.userEmail}>OtavioBalelas@gmail.com</Text>
                    <TouchableOpacity style={style.logoutButton}>
                        <Text style={style.logoutText}>Sair</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.transactionsContainer}>
                    {transactions.map((item) => (
                        <TouchableOpacity key={item.id} style={style.transactionItem}>
                            <View style={style.iconWrapper}>
                                <MaterialIcons name={item.icon} size={22} color={Color.white} />
                            </View>
                            <View style={style.transactionDetails}>
                                <Text style={style.transactionName}>{item.name}</Text>
                                <MaterialIcons name="arrow-forward" size={22} color={Color.white} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
