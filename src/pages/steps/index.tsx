import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { style } from "@/src/pages/steps/styles";
import { Logo } from "@/src/constants/Icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/navigation/types";
import StepImage from "@/src/assets/img/Steps-img.png";


type GetStartNavigationProp = StackNavigationProp<RootStackParamList, "GetStart">;

export default function Steps() {
    const navigation = useNavigation<GetStartNavigationProp>();

    const goToNextScreen = (screen: "Login" | "Register") => {
        navigation.navigate(screen);
    };

    return (
        <View style={style.container}>
            <View style={style.logo}>
                <Logo width={100} height={100} />
            </View>
            <Image source={StepImage} style={style.image} />

            <Text style={style.title}>Ainda não tem uma conta? Registre-se</Text>

            <Text style={style.description}>
                Já tem uma conta? Faça login
            </Text>

            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.button} onPress={() => goToNextScreen("Login")}>
                    <Text style={style.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.RegisterButton} onPress={() => goToNextScreen("Register")}>
                    <Text style={style.RegisterButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
