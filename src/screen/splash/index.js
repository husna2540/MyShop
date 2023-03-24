import React, { useEffect } from "react";
import { ActivityIndicator, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { CommonActions } from '@react-navigation/native';

import styles from './styles'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'Home' },
                    ],
                })
            );
        }, 1000);
    }, [])

    return (
        <LinearGradient colors={['#4388ea', '#79a9ec', '#4388ea',]} style={styles.linearGradient}>
            <Image
                source={require('../../assets/storeSplash.png')}
                style={styles.iconStore}
                resizeMode={'contain'} />
            <ActivityIndicator color={'#ffffff'} />
        </LinearGradient>

    )
}

export default SplashScreen