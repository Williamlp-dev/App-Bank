import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import Animated, { Easing, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import Color from '../constants/Color';
import chipImage from '@/assets/Chip.png';
import LogoCardAlt from '@/assets/LogoCardAlt.png'
import Aproximation from '@/assets/Approaach.png';



export function FlipCard() {
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => {
        setFlipped(!flipped);
    };

    const frontAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateY: withTiming(flipped ? '180deg' : '0deg', {
                        duration: 800,
                        easing: Easing.out(Easing.ease),
                    }),
                },
            ],
        };
    });

    const backAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateY: withTiming(flipped ? '0deg' : '180deg', {
                        duration: 800,
                        easing: Easing.out(Easing.ease),
                    }),
                },
            ],
        };
    });

    return (
        <View style={styles.flipCardContainer}>
            <TouchableWithoutFeedback onPress={flipCard}>
                <View style={styles.flipCard}>
                    <Animated.View style={[styles.card, frontAnimatedStyle]}>
                        <View style={styles.cardFront}>
                            <Text style={styles.heading}>ECO CARD</Text>
                            <Image source={chipImage} style={styles.chip} />
                            <Image source={LogoCardAlt} style={styles.contactless} />
                            <Text style={styles.name}>Otavio Balelas</Text>
                        </View>
                    </Animated.View>

                    <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
                        <View style={styles.cardBackContent}>
                            <View style={styles.cardBelt}></View>
                            <View style={styles.cardBackCt1}>
                                <Text style={styles.cardNumber}>9759 2484 5269 6576</Text>
                                <Image source={Aproximation} style={styles.approach} />
                            </View>

                            <View style={styles.cardBackCt2}>
                                <Text style={styles.date}>12 / 24</Text>
                                <Text style={styles.validThru}>Cv 123</Text>
                            </View>
                        </View>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    flipCardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    flipCard: {
        width: 240,
        height: 154,
        perspective: 1000,
    },
    card: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
    },
    cardFront: {
        backgroundColor: Color.tintColor,
        borderRadius: 16,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    cardBack: {
        backgroundColor: Color.tintColor,
        borderRadius: 16,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        transform: [{ rotateY: '180deg' }],
    },
    cardBelt: {
        width: 240,
        height: 20,
        marginBottom: 20,
        backgroundColor: 'black',
    },
    cardBackCt1: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: 200,
    },
    cardBackCt2: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: 200,
    },
    heading: {
        color: 'white',
        fontSize: 14,
        letterSpacing: 2,
        fontWeight: 'bold',
        position: 'absolute',
        top: 15,
        left: 15,

    },
    chip: {
        width: 65,
        height: 65,
        borderColor: 'black',
        left: 10,
        top: 45,
        position: 'absolute',
    },
    contactless: {
        width: 30,
        height: 30,
        right: 12,
        bottom: 10,
        position: 'absolute',

    },
    approach: {
        width: 40,
        height: 40,
        marginLeft: 30,
    },

    cardNumber: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'PoppinsSemiBold',


    },
    validThru: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'PoppinsSemiBold',

    },
    date: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'PoppinsSemiBold',
        marginRight: 20,
    },
    name: {
        color: 'white',
        fontSize: 9.6,
        fontFamily: 'PoppinsSemiBold',
        position: 'absolute',
        left: 15,
        bottom: 10,
    },
    cardBackContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

});
