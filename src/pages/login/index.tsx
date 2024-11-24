import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/navigation/types";
import { styles } from "./styles";
import { Back, Arrow } from "@/src/constants/Icons";
import StepImage from "@/src/assets/img/Login.png";

type RegisterNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

export default function Login() {
  const navigation = useNavigation<RegisterNavigationProp>();

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Usuário logado:', { cpf, senha });
    navigation.navigate("Success");
  };

  const goBack = () => {
    navigation.navigate("Steps");
  };

  return (
    <View style={styles.container}>
      <View style={styles.squareContainer}>
        <TouchableOpacity onPress={goBack} style={styles.arrowContainer}>
          <Back style={styles.arrowIcon} />
        </TouchableOpacity>

        <Text style={styles.registerTitle}>Login</Text>
        <Text style={styles.description}>
          Access your account to manage your personalized financial solutions.
        </Text>
      </View>

      <Image source={StepImage} style={styles.image} />

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
          placeholderTextColor="#A7A5A5"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholderTextColor="#A7A5A5"
        />
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleLogin}>
        <Text style={styles.signUpButtonText}>Sign In</Text>
        <Arrow style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
}
