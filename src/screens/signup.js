import react, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import theme from '../utils/theme';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setAppLoading } from '../redux/AppLoader/appLoaderAction';

const Signup = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = async () => {

        if (!email) {
            Alert.alert('Warning!', "Please enter your email address!")
            return
        }
        if (!password) {
            Alert.alert('Warning!', "Please enter your password! ")
            return
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const result = emailRegex.test(email);
        if (!result) {
            Alert.alert('Error', 'Please enter valid email address!');
            return;
        }
        dispatch(setAppLoading(true));
        await auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {

                dispatch(setAppLoading(false));
                navigation.navigate('Home');
            })
            .catch(err => {
                dispatch(setAppLoading(false));
                if (err.code === 'auth/email-already-in-use') {
                    Alert.alert("Error", "You have already created the account", [
                        {
                            text: 'Cancel',
                            onPress: () => { console.log('cancel pressed') }
                        },
                        {
                            text: 'Go to Login',
                            onPress: () => { navigation.navigate('Login') }
                        }
                    ])

                    return
                }
                Alert.alert('Error', err.message)
            });
    }

    return (
        <View style={styles.cotainer}>
            <Text style={styles.title}>Create new account!</Text>
            <CustomInput label={'Name'} placeholder={"Enter your first name"} onChangeText={(text) => {
                setName(text)
            }} />
            <CustomInput label={'Email'} placeholder={"Enter your email address"} onChangeText={(text) => {
                setEmail(text)
            }} />
            <CustomInput label={'Password'} placeholder={"Enter your password"} secureTextEntry={true} onChangeText={(text) => { setPassword(text) }} />
            <CustomButton onPress={register} title={"Create account"} />
            <View style={styles.bottomTextContainer}>
                <Text style={styles.text}>Already have account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} activeOpacity={theme.activeOpacity}>
                    <Text style={styles.text2}> Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        justifyContent: 'center',

    },
    title: {
        fontSize: 20,
        color: theme.colors.black,
        fontWeight: 'bold',
        width: '90%',
        alignSelf: 'center'
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: 5
    },
    text: {
        fontSize: 14,
        color: theme.colors.black
    },
    text2: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold'
    }
})

export default Signup;