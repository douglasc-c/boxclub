import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, StatusBar, Dimensions, Keyboard } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Logo from '../assets/icons/Logo.svg';

import InputComponent from '../components/InputComponent';
import InputPassword from '../components/InputPassword';

export default function Login() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function nextPage() {
        navigation.navigate('Tabs')
    }
    function forgotPassword() {
        navigation.navigate('recorverPassword')
    }
    function createAccount() {
        navigation.navigate('createAccount')
    }

    return (
        <View style={styles.full}>
            <StatusBar barStyle='light-content' />
            <Logo width={DEVICE_WIDTH * .4} height={DEVICE_WIDTH * .4} style={styles.logo} />
            <View style={styles.containerInput}>
                <Text style={styles.loginText} >Login</Text>
                <TouchableOpacity style={styles.createBtn} onPress={createAccount}>
                    <Text style={styles.textCreate}>Não possui conta? <Text style={styles.textRegister}>Registre-se.</Text></Text>
                </TouchableOpacity>
                <InputComponent
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    keyboardType="email-address"
                    autoCapitalize="none" />
                <InputPassword
                    placeholder='Senha'
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
                    autoCapitalize="none" />
                <TouchableOpacity style={styles.loginBtn} onPress={nextPage}>
                    <Text style={styles.textBtn}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgotBtn} onPress={forgotPassword}>
                    <Text style={styles.textForgot}>Esqueceu sua senha ?</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.copyright}>© 2021 BoxClub</Text>
        </View>
    )
}
const DEVICE_WIDTH = Dimensions.get('screen').width;
const DEVICE_HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    full: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        backgroundColor: '#000',
        alignItems: "center",
    },
    headerLanguage: {
        flexDirection: "row",
        alignSelf: "flex-end",
        alignItems: "center",
        height: DEVICE_HEIGHT * .05,
        marginVertical: DEVICE_HEIGHT * .04,
        marginRight: DEVICE_WIDTH * .05
    },
    logo: {
        alignSelf: "baseline",
        marginLeft: DEVICE_WIDTH * .1
    },
    alignIcons: {
        marginLeft: DEVICE_WIDTH * .025
    },
    bg: {
        width: DEVICE_WIDTH * .5,
        height: DEVICE_HEIGHT * .15,
        marginTop: DEVICE_HEIGHT * .05
    },
    containerInput: {
        width: DEVICE_WIDTH * .9,
        height: DEVICE_HEIGHT * .4,
        alignItems: "center",
        justifyContent: "center",
    },
    loginBtn: {
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        width: DEVICE_WIDTH * .8,
        height: DEVICE_HEIGHT * .06,
        backgroundColor: '#4FFC91',
        marginTop: DEVICE_HEIGHT * .015
    },
    textBtn: {
        color: '#000',
        fontSize: RFPercentage(2.6),
        // fontWeight: 'bold'
        fontFamily: 'Montserrat-Black',
    },
    forgotBtn: {
        marginTop: DEVICE_HEIGHT * .025
    },
    textForgot: {
        color: '#fff'
    },
    createBtn: {
        justifyContent: "center",
        width: DEVICE_WIDTH * .8,
        height: DEVICE_HEIGHT * .06,
    },
    textCreate: {
        color: '#fff'
    },
    copyright: {
        color: '#fff',
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .3 : DEVICE_HEIGHT * .2,
        flexDirection: "column-reverse",
    },
    textRegister: {
        color: '#4FFC91',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        textDecorationLine: 'underline',
    },
    loginText: {
        color: '#fff',
        justifyContent: "center",
        width: DEVICE_WIDTH * .8,
        fontSize: RFPercentage(3),
        fontFamily: 'Montserrat-Bold',
    }
})