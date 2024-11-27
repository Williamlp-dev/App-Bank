import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { style } from "./styles";

interface User {
    nome: string;
    cpf: string;
    email: string;
    dataNascimento: string;
}

const ViewUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const loadUsers = async () => {
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers);
        };

        loadUsers();
    }, []);

    const fetchUsers = async (): Promise<User[]> => {
        try {
            const userList: string[] = JSON.parse((await AsyncStorage.getItem("users")) || "[]");

            const users = await Promise.all(
                userList.map(async (cpf) => {
                    const user = await AsyncStorage.getItem(`user_${cpf}`);
                    return user ? JSON.parse(user) : null;
                })
            );

            return users.filter((user): user is User => user !== null);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            return [];
        }
    };

    const deleteUser = async (cpf: string) => {
        try {
            // Remove o usuário específico do AsyncStorage
            await AsyncStorage.removeItem(`user_${cpf}`);

            // Atualiza a lista global de CPFs
            const userList: string[] = JSON.parse((await AsyncStorage.getItem("users")) || "[]");
            const updatedUserList = userList.filter((userCpf) => userCpf !== cpf);
            await AsyncStorage.setItem("users", JSON.stringify(updatedUserList));

            // Atualiza o estado local para refletir a exclusão
            setUsers((prevUsers) => prevUsers.filter((user) => user.cpf !== cpf));

            Alert.alert("Sucesso", "Usuário excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
            Alert.alert("Erro", "Ocorreu um erro ao excluir o usuário.");
        }
    };

    return (
        <View style={style.container}>
            <Text style={style.title}>Usuários Cadastrados</Text>
            {users.length > 0 ? (
                <FlatList
                    data={users}
                    keyExtractor={(item, index) => `${item.cpf}_${index}`}
                    renderItem={({ item }) => (
                        <View style={style.userCard}>
                            <Text>Nome: {item.nome}</Text>
                            <Text>CPF: {item.cpf}</Text>
                            <Text>Email: {item.email}</Text>
                            <Text>Data de Nascimento: {item.dataNascimento}</Text>
                            <View style={style.actionsContainer}>
                                <TouchableOpacity
                                    style={style.deleteButton}
                                    onPress={() =>
                                        Alert.alert(
                                            "Confirmação",
                                            "Deseja realmente excluir este usuário?",
                                            [
                                                { text: "Cancelar", style: "cancel" },
                                                { text: "Excluir", onPress: () => deleteUser(item.cpf) },
                                            ]
                                        )
                                    }
                                >
                                    <Text style={style.deleteText}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            ) : (
                <Text style={style.emptyText}>Nenhum usuário cadastrado.</Text>
            )}
        </View>
    );
};

export default ViewUsers;
