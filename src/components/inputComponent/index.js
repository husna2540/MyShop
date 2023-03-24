import React from "react";
import { TextInput, View, Text } from "react-native";

import styles from "./styles";

const InputComponent = ({
    value,
    onChangeText,
    placeholder,
    keyboardType,
    isReq,
    name,
    isEdit
}) => {
    return (
        <View style={{
            flexDirection: 'row'
        }}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeText(name, text)}
                value={value}
                keyboardType={keyboardType}
                placeholder={placeholder}
                editable={isEdit}
            />
            {isReq && (
                <Text style={styles.reqText}>*</Text>
            )}

        </View>
    )
}

export default InputComponent