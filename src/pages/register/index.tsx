import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "@/src/navigation/types";
import { styles } from "./styles";
import { Back, Arrow } from "@/src/constants/Icons";
import { User } from "@/src/navigation/users"; // Ajuste o caminho conforme necessário



type RegisterNavigationProp = StackNavigationProp<RootStackParamList, "Register">;

const Register = () => {
    const navigation = useNavigation<RegisterNavigationProp>();
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleRegister = async () => {
        if (!nome || !cpf || !dataNascimento || !email || !senha) {
            Alert.alert("Atenção", "Preencha todos os campos!");
            return;
        }

        try {
            // Verifica se o usuário já existe
            const existingUser: string | null = await AsyncStorage.getItem(`user_${cpf}`);
            if (existingUser) {
                Alert.alert("Erro", "Usuário já existe!");
                return;
            }

            // Criação do objeto do usuário
            const user: User = {
                nome,
                cpf,
                dataNascimento,
                email,
                senha,
            };

            // Armazena o usuário com a chave baseada no CPF
            await AsyncStorage.setItem(`user_${cpf}`, JSON.stringify(user));

            // Atualiza a lista global de CPFs
            const userList: string[] = JSON.parse((await AsyncStorage.getItem("users")) || "[]");
            if (!userList.includes(cpf)) {
                userList.push(cpf);
                await AsyncStorage.setItem("users", JSON.stringify(userList));
            }

            Alert.alert("Sucesso", "Usuário registrado!");
            navigation.navigate("Success" as never);
        } catch (error) {
            console.error("Erro ao registrar usuário:", error);
            Alert.alert("Erro", "Ocorreu um erro ao tentar registrar o usuário.");
        }
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

                <Text style={styles.registerTitle}>Register</Text>
                <Text style={styles.description}>
                    Crie uma conta para acessar suas soluções financeiras personalizadas.
                </Text>
            </View>

            <View style={styles.inputsContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                    placeholderTextColor="#A7A5A5"
                />
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
                    placeholder="Data de Nascimento"
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                    placeholderTextColor="#A7A5A5"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
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

            <TouchableOpacity style={styles.signUpButton} onPress={handleRegister}>
                <Text style={styles.signUpButtonText}>Registrar</Text>
                <Arrow style={styles.arrowIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default Register;
