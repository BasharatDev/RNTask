import react, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Alert } from 'react-native';
import theme from '../utils/theme';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { addTask } from '../redux/task/addTaskAction';
import { TASKS } from '../redux/task/getState';

const EditTask = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const route = useRoute()
    const selectedItem = route?.params?.item
    const tasks = useSelector(TASKS.tasks)
    const [taskName, setTaskName] = useState(selectedItem.taskName);
    const [shortDes, setShortDes] = useState(selectedItem.shortDescription);
    const [longDes, setLongDes] = useState(selectedItem.longDescription);
    const [estimatedHours, setEstimatedHours] = useState(selectedItem.estimatedHours);
    const [budget, setBudget] = useState(selectedItem.budget)
    const [lines, setLines] = useState(selectedItem.linesOfCode)
    const [screens, setScreens] = useState(selectedItem.numberOfScreens)
    const editTaskHandler = () => {
        const filteredTasks = tasks.filter((task) => { return task.id !== selectedItem.id })

        const newTask = { id: selectedItem.id, taskName: taskName, shortDescription: shortDes, longDescription: longDes, estimatedHours: estimatedHours, budget: budget, linesOfCode: lines, numberOfScreens: screens }
        const newData = [...filteredTasks, newTask]
        dispatch(addTask(newData))
        Alert.alert("Added", "Your task has been edited successfully!")
        navigation.navigate("Home")
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <CustomInput value={taskName} label={'Task Name'} placeholder={"Please enter task name"} onChangeText={(text) => { setTaskName(text) }} />
            <CustomInput value={shortDes} label={'Short Description'} placeholder={"Please enter short description"} onChangeText={(text) => { setShortDes(text) }} />
            <CustomInput value={longDes} label={'Long Description'} placeholder={"Please enter long Description"} onChangeText={(text) => { setLongDes(text) }} />
            <CustomInput value={String(estimatedHours)} label={'Estimated Hours'} placeholder={"Please enter estimated hours"} onChangeText={(text) => { setEstimatedHours(text) }} keyboardType={'numeric'} />
            <CustomInput value={String(lines)} label={'Lines Of Code'} placeholder={"Please enter number of lines"} onChangeText={(text) => { setLines(text) }} keyboardType={'numeric'} />
            <CustomInput value={String(screens)} label={'Number Of Screens'} placeholder={"Please enter number of screens"} onChangeText={(text) => { setScreens(text) }} keyboardType={'numeric'} />
            <CustomInput value={String(budget)} label={'Budget'} placeholder={"Please enter number of screens"} onChangeText={(text) => { setBudget(text) }} keyboardType={'numeric'} />
            <CustomButton onPress={editTaskHandler} title={'Save'} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex:1
    },
    heading: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.black,
        marginVertical: 10
    }
})

export default EditTask