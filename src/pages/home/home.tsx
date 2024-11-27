import React, { useState, useRef } from "react";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Modal, Button, Alert } from "react-native";
import { style } from "./styles";
import { CameraView, useCameraPermissions } from "expo-camera";
import HeaderImg from "@/assets/Logo.png";
import Color from "@/src/constants/Color";

export default function Home() {

    type IconNames = 'Pix' | 'Qr Code' | 'Escanear' | 'Pagar';

    const iconMap: Record<IconNames, keyof typeof MaterialIcons.glyphMap> = {
        Pix: 'currency-exchange',
        'Qr Code': 'qr-code',
        Escanear: 'camera-alt',
        Pagar: 'payment',
    };

    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [permission, requestPermission] = useCameraPermissions()

    const qrCodeLock = useRef(false)

    async function handleOpenCamera() {

        try {
            const { granted } = await requestPermission()

            if (!granted) {
                return Alert.alert("Camera", "Você precisa habilitar o uso da camera")
            }


            setModalIsVisible(true)
            qrCodeLock.current = false
        } catch (error) {
            console.log(error)
        }
    }

    function handleQRCodeRead(data: string) {
        setModalIsVisible(false)
        Alert.alert("QRCode", data)
    }

    return (
        <View style={style.container}>
            <Modal visible={modalIsVisible} style={{ flex: 1 }}>
                <CameraView style={{ flex: 1 }} facing="back" onBarcodeScanned={({ data }) => {
                    if (data && !qrCodeLock.current) {
                        qrCodeLock.current = true
                        setTimeout(() => handleQRCodeRead(data), 500)
                    }
                }} />
                <View style={style.closeBtn}>
                    <Button title="Cancelar" onPress={() => setModalIsVisible(false)} />
                </View>
            </Modal>
            <View style={style.squareContainer}>
                <View style={style.header}>
                    <View style={style.headerText}>
                        <Image
                            source={HeaderImg}
                            style={style.profileImage}
                        />
                        <Text style={style.greetingText}>Olá, Admin</Text>
                    </View>

                    <TouchableOpacity style={style.giftIconContainer}>
                        <Ionicons name="notifications-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={style.balanceContainer}>
                    <Text style={style.balanceText}>Seu saldo</Text>
                    <Text style={style.balanceAmount}>EC$ 999,99</Text>
                </View>

                <View style={style.buttonsContainer}>
                    {['Pix', 'Qr Code', 'Escanear', 'Pagar'].map((icon, index) => (
                        <TouchableOpacity
                            key={index}
                            style={style.button}
                            onPress={() => {
                                if (icon === 'Qr Code' || icon === 'Escanear' || icon === 'Pagar') {
                                    handleOpenCamera();
                                }
                            }}
                        >
                            <View style={style.iconCircle}>
                                <MaterialIcons name={iconMap[icon as IconNames]} size={24} color={"white"} />
                            </View>
                            <Text style={style.buttonText}>{icon.charAt(0).toUpperCase() + icon.slice(1)}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={style.bottomButtonsContainer}>
                {['Cartão', 'Carteira', 'Central de ajuda', 'Suporte'].map((label, index) => (
                    <TouchableOpacity key={index} style={style.bottomButton}>
                        <MaterialIcons
                            name={index === 0 ? "credit-card" : index === 1 ? "wallet-travel" : index === 2 ? "help" : "support-agent"}
                            size={24}
                            color="white"
                            style={style.iconStyle}
                        />
                        <Text style={style.buttonLabel}>{label}</Text>
                        <MaterialIcons style={{ marginRight: 10, }} name="arrow-forward" size={22} color={Color.white} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
