import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from "@/src/navigation/types";
import { styles } from "./styles";
import { Back, Arrow } from "@/src/constants/Icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import StepImage from "@/src/assets/img/Login.png";

type LoginNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const Login = () => {
  const navigation = useNavigation<LoginNavigationProp>();
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!cpf || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    try {
      const userString = await AsyncStorage.getItem(`user_${cpf}`);
      const user = userString ? JSON.parse(userString) : null;

      if (user && user.senha === senha) {
        Alert.alert("Sucesso", "Login realizado!");
        navigation.navigate("HomeTabs", { user: user.nome });
      } else {
        Alert.alert("Erro", "CPF ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      Alert.alert("Erro", "Ocorreu um erro ao tentar realizar o login.");
    }
  };

  const goBack = () => {
    navigation.navigate("Steps");
  };

  return (
    <View style={styles.container}>
      <View style={styles.squareContainer}>
        <View style={styles.ButtonContainer} >
          <TouchableOpacity onPress={goBack}>
            <Back style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.admButtonContainer} onPress={() => navigation.navigate("ViewUsers")}>
            <MaterialIcons style={styles.admButton} name="admin-panel-settings" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.registerTitle}>Login</Text>
        <Text style={styles.description}>
          Acesse sua conta para gerenciar suas soluções financeiras personalizadas.
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
        <Text style={styles.signUpButtonText}>Login</Text>
        <Arrow style={styles.arrowIcon} />
      </TouchableOpacity>



    </View>
  );
}

export default Login;