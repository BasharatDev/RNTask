import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import theme from "../utils/theme";

const CustomInput = ({ placeholder, onChangeText, label, customStyle, secureTextEntry, keyboardType, value }) => {
    return (
        <View style={[customStyle, styles.container]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput value={value} style={styles.input} placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 15
    },
    label: {
        fontSize: 15,
        color: theme.colors.black,
        fontWeight: 'bold',
        marginVertical: 5
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 15,
        fontSize: 14,
        borderColor: theme.colors.border
    }
})

export default CustomInput