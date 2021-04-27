import React, { useState } from 'react'
import { StyleSheet, Text, View, Animated, StatusBar, Dimensions, Keyboard, Platform, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

import BackgroundAnimated from '../../components/BackgroundAnimated'

import Logo from '../../assets/icons/Logo.svg';

export default function Settings() {
    const [currentActive, setCurrentActive] = useState('my_numbers')
    const navigation = useNavigation()

    return (
        <View style={styles.full}>
            <StatusBar barStyle='light-content' />

            <Logo width={DEVICE_WIDTH * .4} height={DEVICE_WIDTH * .2} style={styles.logo} />

            <LinearGradient style={styles.cointainer}
                colors={['#3FC974', '#4FFC91']}
                size="small"
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                locations={[0, 1, 1]}
                activeOpacity={0.7}
                containerStyle={{ flex: 1, marginLeft: 20, marginTop: 115 }}>

                <BackgroundAnimated text='Meus Números' active={currentActive == 'my_numbers' ? true : false} handlePress={() => setCurrentActive('my_numbers')} />
                <BackgroundAnimated text='Meus Pedidos' active={currentActive == 'my_request' ? true : false} handlePress={() => setCurrentActive('my_request')}  />
                <BackgroundAnimated text='Dados Pessoais' active={currentActive == 'data_personal' ? true : false} handlePress={() => setCurrentActive('data_personal')}  />
                <BackgroundAnimated text='Sair' active={currentActive == 'logout' ? true : false} handlePress={() => setCurrentActive('logout')}  />

            </LinearGradient>



            <StatusBar barStyle="light-content" />
        </View>
    )
}

const DEVICE_WIDTH = Dimensions.get('screen').width;
const DEVICE_HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    logo: {
        alignSelf: "baseline",
        marginLeft: DEVICE_WIDTH * .1,
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .035 : DEVICE_HEIGHT * -.01,
    },

    cointainer: {
        paddingVertical: DEVICE_WIDTH * .03,
        backgroundColor: '#4FFC91',
        width: DEVICE_WIDTH * .8,
        borderRadius: 20,
    },
    text: {
        paddingHorizontal: DEVICE_WIDTH * .05,
        lineHeight: 30,
        color: '#000',
        textAlign: 'left',
        fontSize: RFPercentage(2.5),
        fontFamily: 'Montserrat-Medium',
    },
})