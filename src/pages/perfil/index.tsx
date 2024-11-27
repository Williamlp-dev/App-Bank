import React, { useCallback } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Alert, BackHandler } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import HeaderImg from "@/assets/Logo.png";
import { style } from "./styles";
import Color from "@/src/constants/Color";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/navigation/types";

type IconName =
    | "home"
    | "subscriptions"
    | "music-note"
    | "shopping-cart"
    | "shopping-bag"
    | "electric-bolt";

type ProfileNavigationProp = StackNavigationProp<RootStackParamList, "Profile">;

const transactions = [
    { id: 1, name: "Minhas Informações", icon: "manage-accounts" as IconName },
    { id: 2, name: "Cartão", icon: "credit-card" as IconName },
    { id: 3, name: "Lixo Coletado", icon: "assessment" as IconName },
    { id: 4, name: "Alterar Senha", icon: "key" as IconName },
    { id: 5, name: "Suporte", icon: "help" as IconName },
    { id: 6, name: "Sobre", icon: "aod" as IconName },
];

export default function Profile() {
    const navigation = useNavigation<ProfileNavigationProp>();

    // Função para lidar com o botão "Sair"
    const handleLogout = async () => {
        Alert.alert(
            "Sair",
            "Deseja realmente sair?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Sair",
                    onPress: async () => {
                        try {
                            // Aqui você pode limpar os dados de sessão do usuário, se necessário
                            navigation.navigate("GetStart"); // Navega para a tela de login/início
                        } catch (error) {
                            console.error("Erro ao deslogar:", error);
                            Alert.alert("Erro", "Não foi possível realizar o logout.");
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                Alert.alert(
                    "Sair",
                    "Deseja realmente sair do aplicativo?",
                    [
                        { text: "Cancelar", style: "cancel" },
                        {
                            text: "Sim",
                            onPress: () => BackHandler.exitApp(),
                        },
                    ],
                    { cancelable: true }
                );
                return true;
            };

            const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);
            return () => subscription.remove();
        }, [])
    );

    return (
        <ScrollView contentContainerStyle={style.scrollContainer}>
            <View style={style.container}>
                <View style={style.profileHeader}>
                    <Image source={HeaderImg} style={style.profileImage} />
                    <Text style={style.userName}>Admin</Text>
                    <Text style={style.userEmail}>Admin@gmail.com</Text>
                    <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
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
