import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Octicons, MaterialIcons } from '@expo/vector-icons';
import Home from "../pages/home/home";
import GetStart from "../pages/getstart";
import Steps from "../pages/steps";
import Login from "../pages/login";
import Register from "../pages/register";
import Sucess from "../pages/sucess";
import Card from "../pages/card";
import Profile from "../pages/perfil";
import Extrato from "../pages/extrato";
import ViewUsers from "../pages/users/index"
import { RootStackParamList } from '../navigation/types';
import Color from "../constants/Color";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                tabBarActiveTintColor: "#839FF9",
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: Color.grayAlt,
                    borderTopWidth: 0,
                    height: 90,
                    paddingBottom: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -5 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 10,
                    position: 'relative',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="home" size={24} color={color} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontFamily: 'PoppinsSemiBold',
                        textAlign: 'center',
                    },
                    tabBarIconStyle: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
            />
            <Tab.Screen
                name="Card"
                component={Card}
                options={{
                    headerShown: true,
                    tabBarLabel: 'Card',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="add-card" size={24} color={color} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontFamily: 'PoppinsSemiBold',
                        textAlign: 'center',
                    },
                    tabBarIconStyle: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    headerStyle: {
                        backgroundColor: Color.grayAlt,
                        shadowColor: 'transparent',
                        elevation: 0,
                        height: 70,
                    },
                    headerTitleStyle: {
                        fontSize: 18,
                        fontFamily: 'PoppinsSemiBold',
                        color: 'white',
                    },
                    headerTitleAlign: 'center',
                }}
            />
            <Tab.Screen
                name="Extrato"
                component={Extrato}
                options={{
                    tabBarLabel: 'Extrato',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="wallet-outline" size={24} color={color} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontFamily: 'PoppinsSemiBold',
                        textAlign: 'center',
                    },
                    tabBarIconStyle: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: true,
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle-outline" size={24} color={color} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontFamily: 'PoppinsSemiBold',
                        textAlign: 'center',
                    },
                    tabBarIconStyle: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    headerStyle: {
                        backgroundColor: Color.grayAlt,
                        shadowColor: 'transparent',
                        elevation: 0,
                        height: 70,
                    },
                    headerTitleStyle: {
                        fontSize: 18,
                        fontFamily: 'PoppinsSemiBold',
                        color: 'white',
                    },
                    headerTitleAlign: 'left',
                    headerTitle: 'Perfil',

                    headerRight: () => (
                        <TouchableOpacity onPress={() => { }} style={{ marginRight: 15 }}>
                            <AntDesign name="edit" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <Stack.Navigator
            initialRouteName="GetStart"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                transitionSpec: {
                    open: { animation: 'timing', config: { duration: 300 } },
                    close: { animation: 'timing', config: { duration: 300 } },
                },
            }}
        >
            <Stack.Screen
                name="GetStart"
                component={GetStart}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen
                name="Steps"
                component={Steps}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />
            <Stack.Screen
                name="Success"
                component={Sucess}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />
            <Stack.Screen
                name="ViewUsers"
                component={ViewUsers}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    cardStyleInterpolator: ({ current, layouts }) => {
                        const translateX = current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        });
                        return {
                            cardStyle: {
                                opacity: current.progress,
                                transform: [{ translateX }],
                            },
                        };
                    },
                }}
            />
        </Stack.Navigator>
    );
}
