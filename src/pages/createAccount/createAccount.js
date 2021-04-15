import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, StatusBar, Dimensions, Keyboard, CheckBox } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextInputMask } from 'react-native-masked-text'

import InputComponent from '../../components/InputComponent'
import InputPassword from '../../components/InputPassword'

import Logo from '../../assets/icons/Logo.svg';

export default function createAccount() {

    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')
    const [phone, setPhone] = useState('')

    function nextPage() {
        navigation.navigate('Tabs')
    }
    function forgotPassword() {
        navigation.navigate('recorverPassword')
    }
    function createAccount() {
        navigation.navigate('createAccount')
    }
    function login() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.full}>
            <StatusBar barStyle='light-content' />
            <Logo style={styles.logo} width={DEVICE_WIDTH * .4} height={DEVICE_WIDTH * .4} />
            <View style={styles.containerInput}>
                <Text style={styles.registerText}>Cadastrar</Text>
                <InputComponent
                    placeholder='Nome Completo'
                    value={name}
                    onChangeText={setName}
                    autoCorrect={false}
                    autoCapitalize="none" />
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
                <InputPassword
                    placeholder='Confirmar Senha'
                    value={confPass}
                    onChangeText={setConfPass}
                    autoCorrect={false}
                    autoCapitalize="none" />
                <TextInputMask
                    placeholder='(DDD) Telefone'
                    type={'cel-phone'}
                    placeholderTextColor='#fff'
                    style={styles.mask}
                    value={phone}
                    onChangeText={setPhone}
                    autoCorrect={false}
                    keyboardType="phone-pad" />
                <View style={styles.checkBoxContainer}>
                        <BouncyCheckbox
                            size={25}
                            fillColor="#4FFC91"
                            style={styles.checkBox}
                            unfillColor="#000"
                            iconStyle={{ borderColor: "#4FFC91" }}
                            onPress={(isChecked: boolean) => { }} />
                        <Text style={styles.checkBoxText}>Declaro que li e concordo com os <Text style={styles.textColor}>Termos de uso</Text> e <Text style={styles.textColor}>Política de privacidade</Text> da BoxClub.</Text>
                </View>
                <TouchableOpacity style={styles.registerBtn} onPress={nextPage}>
                    <Text style={styles.textBtn}>REGISTRAR-SE</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Já tem uma conta ?
                    <Text style={styles.textColor} onPress={login}> LOGIN</Text>
                </Text>
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
    mask: {
        borderWidth: 0.5,
        borderColor: '#424242',
        borderRadius: 50,
        color: '#fff',
        width: DEVICE_WIDTH * .8,
        height: DEVICE_HEIGHT * .075,
        marginTop: DEVICE_HEIGHT * .01,
        paddingLeft: DEVICE_WIDTH * .05
    },
    logo: {
        alignSelf: "baseline",
        marginLeft: DEVICE_WIDTH * .1,
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .0 : DEVICE_HEIGHT * -.05,
    },
    containerInput: {
        width: DEVICE_WIDTH * .9,
        height: Platform.OS === 'ios' ? DEVICE_HEIGHT * .63 : DEVICE_HEIGHT * .6,
        alignItems: "center",
        justifyContent: "center",
    },
    checkBoxContainer: {
        flexDirection: "row",
        marginTop: DEVICE_HEIGHT * .015,
    },
    checkBoxText: {
        color: '#fff',
        width: DEVICE_WIDTH * .7,
        fontSize: RFPercentage(1.7),
    },
    registerText: {
        color: '#fff',
        justifyContent: "center",
        width: DEVICE_WIDTH * .8,
        fontSize: RFPercentage(3),
        fontFamily: 'Montserrat-Bold',
    },
    registerBtn: {
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
        fontFamily: 'Montserrat-Black',
    },
    text: {
        marginTop: DEVICE_HEIGHT * .025,
        color: '#fff'
    },
    textColor: {
        color: '#4FFC91',
        textDecorationLine: 'underline',
    },
    copyright: {
        color: '#fff',
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .11 : DEVICE_HEIGHT * .06,
        flexDirection: "column-reverse",
    },
})
