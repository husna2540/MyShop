import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";

const HeaderComponent = ({
    title,
    isHideCloseIcon,
    onPressCloseIcon,
    isShowArrowLeft,
    onPressArrowLeft
}) => {
    return (
        <LinearGradient
            colors={['#4388ea', '#79a9ec', '#4388ea',]}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            style={styles.container}>
            <View style={styles.statusbar} />
            <View style={styles.headerView}>
                <View style={styles.flexRightLeft}>
                    {!isHideCloseIcon && (
                        <TouchableOpacity onPress={() => onPressCloseIcon()}>
                            <Image source={require('../../assets/close.png')} style={styles.closeIcon} />
                        </TouchableOpacity>
                    )}
                    {isShowArrowLeft && (
                        <TouchableOpacity onPress={() => onPressArrowLeft()}>
                            <Image source={require('../../assets/arrow.png')} style={styles.arrowIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.flexcenter}>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
                <View style={styles.flexRightLeft} />

            </View>

        </LinearGradient>
    )
}

export default HeaderComponent