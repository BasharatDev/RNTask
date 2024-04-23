import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import theme from "../utils/theme";

const HeaderButton = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('AddTask') }} activeOpacity={theme.activeOpacity} style={styles.container}>
            <Image source={require('../assets/plus.png')} style={styles.img} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 30,
        borderWidth: 1,
        borderColor: theme.colors.black,
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center'
    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }

})

export default HeaderButton