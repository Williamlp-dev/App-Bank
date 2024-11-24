import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { style } from "./styles";
import { Logo, Home } from "@/src/constants/Icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/navigation/types";
import Successimg from "@/src/assets/img/Success.png";

type GetStartNavigationProp = StackNavigationProp<RootStackParamList, "Success">;

export default function Success() {
    const navigation = useNavigation<GetStartNavigationProp>();

    const goToNextScreen = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeTabs' }],
        });
    };

    return (
        <View style={style.container}>
            <View style={style.logo}>
                <Logo width={100} height={100} />
            </View>
            <Image source={Successimg} style={style.image} />

            <Text style={style.title}>Sucessful!!</Text>

            <Text style={style.description}>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos
            </Text>

            <TouchableOpacity style={style.button} onPress={goToNextScreen}>
                <Text style={style.buttonText}>Go to Home</Text>
                <Home width={20} />
            </TouchableOpacity>
        </View>
    );
}
