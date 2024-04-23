import React from "react";
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import Login from "../screens/login";
import Signup from "../screens/signup";
import AddTask from "../screens/addTask";
import TaskDetails from "../screens/taskDetails";

import theme from "../utils/theme";
import HeaderButton from "../components/headerButton";
import EditTask from "../screens/editTask";

const Stack = createNativeStackNavigator();

const Index = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} options={{ title: 'Home', headerRight: () => { return (<HeaderButton />) } }} />
                <Stack.Screen name="AddTask" component={AddTask} options={{ title: 'Add Task' }} />
                <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ title: 'Task Details' }} />
                <Stack.Screen name="EditTask" component={EditTask} options={{ title: 'Edit Task' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index;