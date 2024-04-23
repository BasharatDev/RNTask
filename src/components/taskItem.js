import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import theme from "../utils/theme";

const TaskItem = ({ onPress, item }) => {

    return (
        <TouchableOpacity disabled={true} style={styles.contaier}>
            <View style={styles.header}>
                <Text style={styles.name}>{item.taskName}</Text>
                <Text style={styles.date}>{item.budget} {"Rupees"}</Text>
            </View>
            <Text style={styles.description}>{item.shortDescription}</Text>
            <TouchableOpacity onPress={onPress} activeOpacity={theme.activeOpacity} style={styles.button}>
                <Text style={styles.buttonTitle}>View details</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contaier: {
        width: '95%',
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: theme.colors.border,
        // borderColor:theme.colors.border,
        // borderWidth:1,
        marginTop: 5,
        paddingHorizontal: 5,
        paddingVertical: 5

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors.black
    },
    date: {
        fontSize: 14
    },
    description: {
        fontSize: 14,
        marginHorizontal: 5
    },
    button: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: '40%',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 2
    },
    buttonTitle: {
        fontSize: 15,
        color: theme.colors.white,
        fontWeight: 'bold',
        marginVertical: 8
    }

})

export default TaskItem