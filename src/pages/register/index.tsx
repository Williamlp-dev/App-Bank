import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/navigation/types";
import { styles } from "./styles";
import { Back, Arrow } from "@/src/constants/Icons";

type RegisterNavigationProp = StackNavigationProp<RootStackParamList, "Register">;

export default function Register() {
    const navigation = useNavigation<RegisterNavigationProp>();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleRegister = () => {
        console.log('Usuário registrado:', { nome, cpf, dataNascimento, email, senha });
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

                <Text style={styles.registerTitle}>Register</Text>
                <Text style={styles.description}>
                    Create an account to access your personalized financial solutions.
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
                    keyboardType="numeric"
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
                <Text style={styles.signUpButtonText}>Sign Up</Text>
                <Arrow style={styles.arrowIcon} />
            </TouchableOpacity>
        </View>
    );
}