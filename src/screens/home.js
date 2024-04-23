import react from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import theme from '../utils/theme';
import TaskItem from '../components/taskItem';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { TASKS } from '../redux/task/getState';

const Home = () => {
    const navigation = useNavigation()
    const tasks = useSelector(TASKS.tasks)
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Here's listed all tasks below</Text>
            <FlatList data={tasks} showsVerticalScrollIndicator={false} renderItem={({ item }) => {
                return (
                    <TaskItem item={item} onPress={() => { navigation.navigate('TaskDetails', { item: item }) }} />
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.black,
        marginVertical: 10
    }
})

export default Home