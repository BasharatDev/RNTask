import react, { useState } from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../utils/theme';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setAppLoading } from '../redux/AppLoader/appLoaderAction';

const Login = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signin = async () => {

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
            .signInWithEmailAndPassword(email, password)
            .then(() => {

                dispatch(setAppLoading(false));
                navigation.navigate('Home');
            })
            .catch(err => {
                dispatch(setAppLoading(false));

                Alert.alert('Error', err.message)
            });
    }
    return (
        <View style={styles.cotainer}>
            <Text style={styles.title}>Sign in to your account!</Text>
            <CustomInput label={'Email'} placeholder={"Enter your email address"} onChangeText={(text) => {
                setEmail(text)
            }} />
            <CustomInput label={'Password'} placeholder={"Enter your password"} secureTextEntry={true} onChangeText={(text) => { setPassword(text) }} />
            <CustomButton onPress={signin} title={"Log in"} />
            <View style={styles.bottomTextContainer}>
                <Text style={styles.text}>Don't have account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Signup') }} activeOpacity={theme.activeOpacity}>
                    <Text style={styles.text2}> Create account</Text>
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

export default Login;