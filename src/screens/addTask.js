import react, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Alert } from 'react-native';
import theme from '../utils/theme';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addTask } from '../redux/task/addTaskAction';
import { TASKS } from '../redux/task/getState';

const AddTask = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const tasks = useSelector(TASKS.tasks)
    const [taskName, setTaskName] = useState('');
    const [shortDes, setShortDes] = useState('');
    const [longDes, setLongDes] = useState('');
    const [estimatedHours, setEstimatedHours] = useState();
    const [budget, setBudget] = useState()
    const [lines, setLines] = useState()
    const [screens, setScreens] = useState()
    const addTaskHandler = () => {
        const id = tasks.length + 1
        const newTask = { id: id, taskName: taskName, shortDescription: shortDes, longDescription: longDes, estimatedHours: estimatedHours, budget: budget, linesOfCode: lines, numberOfScreens: screens }
        const newData = [...tasks, newTask]
        dispatch(addTask(newData))
        Alert.alert("Added", "Your task has been added successfully!")
        navigation.navigate('Home')
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Please enter the following task details!</Text>
            <CustomInput label={'Task Name'} placeholder={"Please enter task name"} onChangeText={(text) => { setTaskName(text) }} />
            <CustomInput label={'Short Description'} placeholder={"Please enter short description"} onChangeText={(text) => { setShortDes(text) }} />
            <CustomInput label={'Long Description'} placeholder={"Please enter long Description"} onChangeText={(text) => { setLongDes(text) }} />
            <CustomInput label={'Estimated Hours'} placeholder={"Please enter estimated hours"} onChangeText={(text) => { setEstimatedHours(text) }} keyboardType={'numeric'} />
            <CustomInput label={'Lines Of Code'} placeholder={"Please enter number of lines"} onChangeText={(text) => { setLines(text) }} keyboardType={'numeric'} />
            <CustomInput label={'Number Of Screens'} placeholder={"Please enter number of screens"} onChangeText={(text) => { setScreens(text) }} keyboardType={'numeric'} />
            <CustomInput label={'Budget'} placeholder={"Please enter number of screens"} onChangeText={(text) => { setBudget(text) }} keyboardType={'numeric'} />
            <CustomButton onPress={addTaskHandler} title={'Add Task'} />
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

export default AddTask