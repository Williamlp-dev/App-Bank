import React from "react";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";
import HeaderImg from "@/assets/Logo.jpg";

export default function Home() {
    return (
        <View style={style.container}>
            <View style={style.squareContainer}>
                <View style={style.header}>
                    <Image
                        source={HeaderImg}
                        style={style.profileImage}
                    />
                    <Text style={style.greetingText}>Olá, Yann Gabriel</Text>
                    <TouchableOpacity style={style.giftIconContainer}>
                        <Ionicons name="notifications-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={style.balanceContainer}>
                    <Text style={style.balanceText}>Seu saldo</Text>
                    <Text style={style.balanceAmount}>EC$ 0.66</Text>
                </View>

                <View style={style.buttonsContainer}>
                    {['Pix', 'Qr Code', 'Escanear', 'Pagar'].map((icon, index) => (
                        <TouchableOpacity key={index} style={style.button}>
                            <View style={style.iconCircle}>
                                <MaterialIcons name="add-card" size={24} color={"white"} />
                            </View>
                            <Text style={style.buttonText}>{icon.charAt(0).toUpperCase() + icon.slice(1)}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={style.bottomButtonsContainer}>
                {['Cartão', 'Carteira', 'Central de ajuda', 'Suporte'].map((label, index) => (
                    <TouchableOpacity key={index} style={style.bottomButton}>
                        <Text style={style.buttonLabel}>{label}</Text>
                        <MaterialIcons
                            name={index === 0 ? "credit-card" : index === 1 ? "wallet-travel" : index === 2 ? "help" : "support-agent"}
                            size={24}
                            color="white"
                            style={style.iconStyle}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
