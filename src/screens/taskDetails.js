import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import theme from "../utils/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { TASKS } from "../redux/task/getState";
import { addTask } from "../redux/task/addTaskAction";

const TaskDetails = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const item = route?.params?.item
    const tasks = useSelector(TASKS.tasks)
    const deleteTaskHandler = () => {
        Alert.alert("Confirm", 'Are you sure to delete this task?', [
            {
                text: 'cancel',
                onPress: () => { console.log('cancel pressed') }
            },
            {
                text: 'Delete',
                onPress: () => { deleteTask() }
            }
        ])
    }
    const deleteTask = () => {

        const filteredTasks = tasks.filter((task) => { return task.id !== item.id })

        dispatch(addTask(filteredTasks))
        Alert.alert("Deleted", "Your task has been deleted successfully!")
        navigation.navigate("Home")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{item.taskName}</Text>
            <Text style={styles.label}>Task Short Description :</Text>
            <Text style={[styles.description, { textAlign: 'center' }]}>{item.shortDescription}</Text>
            <Text style={styles.label}>Task Long Description :</Text>
            <Text style={styles.description}>{item.longDescription}</Text>
            <Text style={styles.label}>Estimated Hours to complete this task :</Text>
            <Text style={[styles.description, { textAlign: 'center' }]}>{item.estimatedHours} {"Hours"}</Text>
            <Text style={styles.label}>Estimated Lines of code :</Text>
            <Text style={[styles.description, { textAlign: 'center' }]}>{item.linesOfCode} {"Lines of code"}</Text>
            <Text style={styles.label}>Number of screens :</Text>
            <Text style={[styles.description, { textAlign: 'center' }]}>{item.numberOfScreens} {"Screens"}</Text>
            <Text style={styles.label}>Budget :</Text>
            <Text style={[styles.description, { textAlign: 'center' }]}>{item.budget} {"Rupees"}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate('EditTask', { item: item }) }} activeOpacity={theme.activeOpacity} style={styles.button}>
                    <Text style={styles.buttonText}>Edit Task</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteTaskHandler} activeOpacity={theme.activeOpacity} style={styles.button}>
                    <Text style={styles.buttonText}>Delete Task</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        marginVertical: 10
    },
    label: {
        fontSize: 16,
        color: theme.colors.black,
        fontWeight: 'bold',
        marginTop: 5

    },
    description: {
        fontSize: 14,
        marginLeft: 10,
        marginTop: 2
    },
    buttonContainer: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        width: '40%'
    },
    buttonText: {
        textAlign: 'center',
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8
    }
})

export default TaskDetails