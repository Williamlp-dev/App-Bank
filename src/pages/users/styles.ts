import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 16,
    },
    userCard: {
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        backgroundColor: "#f9f9f9",
    },
    emptyText: {
        textAlign: "center",
        color: "#999",
        fontSize: 16,
    },
    actionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
    },
    editButton: {
        padding: 8,
        backgroundColor: "#4CAF50",
        borderRadius: 4,
    },
    deleteButton: {
        padding: 8,
        backgroundColor: "#F44336",
        borderRadius: 4,
    },
    editText: {
        color: "#fff",
        fontWeight: "bold",
    },
    deleteText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
