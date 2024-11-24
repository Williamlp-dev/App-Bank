import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { style } from "./styles";
import { Logo, Arrow } from "@/src/constants/Icons";
import Onboarding from "@/src/components/Onboarding";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/navigation/types";


type GetStartNavigationProp = StackNavigationProp<RootStackParamList, "GetStart">;

export default function GetStart() {
    const navigation = useNavigation<GetStartNavigationProp>();

    const goToNextScreen = () => {
        navigation.navigate("Steps");
    };

    return (
        <View style={style.container}>
            <View style={style.logo}>
                <Logo width={100} height={100} />
            </View>
            <Onboarding />
            <TouchableOpacity style={style.button} onPress={goToNextScreen}>
                <Text style={style.buttonText}>Get Started</Text>
                <Arrow width={20} />
            </TouchableOpacity>
        </View>
    );
}
