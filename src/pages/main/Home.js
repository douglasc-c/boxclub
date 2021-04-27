import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, StatusBar, Dimensions, Keyboard, Platform, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';

import SwiperShoes from '../../components/SwiperShoes';
import SwiperWinner from '../../components/SwiperWinner';

import Logo from '../../assets/icons/Logo.svg';



export default function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.full}>
            <StatusBar barStyle='light-content' />
            
            <Logo width={DEVICE_WIDTH * .4} height={DEVICE_WIDTH * .2} style={styles.logo} />
            
            <Text style={styles.textTitle}>SORTEIOS</Text>

            <SwiperShoes />

            <Text style={styles.textTitle2}>ULTIMOS GANHADORES</Text>

            <SwiperWinner />

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


    textTitle: {
        color: '#fff',
        textAlign: 'right',
        alignSelf: "baseline",
        fontSize: RFPercentage(2.5),
        marginLeft: DEVICE_WIDTH * .1,
        marginBottom: DEVICE_WIDTH * .03,
        fontFamily: 'Montserrat-Black',
    },

    textTitle2: {
        color: '#fff',
        textAlign: 'left',
        alignSelf: "baseline",
        fontSize: RFPercentage(2.5),
        fontFamily: 'Montserrat-Black',
        marginLeft: DEVICE_WIDTH * .1,
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .025 : DEVICE_HEIGHT * .015,
    },
})