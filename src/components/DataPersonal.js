import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Animated, StatusBar, Dimensions, Keyboard, Platform, Image, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

const DataPersonal = ({ ...rest }) => {

    return (
        <LinearGradient style={styles.dataperdonal}
            colors={['#3FC974', '#4FFC91']}
            size="small"
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            locations={[0, 1, 1]}
            activeOpacity={0.7}
            containerStyle={{ flex: 1, marginLeft: 20, marginTop: 115 }}>

            <View style={styles.view_data_personal}>
                <Text style={styles.header_data_personal}>DETALHES DA CONTA</Text>
            </View>

            <View style={styles.view_info_personal}>
                <View style={styles.info_personal}>
                    <Text style={styles.title}>Nome: </Text>
                    <Text style={styles.text}>Douglas Camargo Cesario</Text>
                </View>
                <View style={styles.info_personal}>
                    <Text style={styles.title}>Telefone: </Text>
                    <Text style={styles.text}>(41) 99822-7111</Text>
                </View>
                <View style={styles.info_personal}>
                    <Text style={styles.title}>E-mail: </Text>
                    <Text style={styles.text}>sbvts_mc@icloud.com</Text>
                </View>
                <View style={styles.info_personal}>
                    <Text style={styles.title}>Senha: </Text>
                    <Text style={styles.text}>*********</Text>
                </View>
            </View>

        </LinearGradient>
    )
}

export default DataPersonal

const DEVICE_WIDTH = Dimensions.get('screen').width
const DEVICE_HEIGHT = Dimensions.get('screen').height

const styles = StyleSheet.create({
    dataperdonal: {
        marginTop: DEVICE_HEIGHT * .03,
        width: DEVICE_WIDTH * .8,
        maxHeight: Platform.OS === 'ios' ? DEVICE_HEIGHT * .477 : DEVICE_HEIGHT * .4,
        borderRadius: 20,
    },
    view_data_personal: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    },
    header_data_personal: {
        textAlign: 'left',
        flex: 1,
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-SemiBold',
    },
    view_info_personal: {
        padding: 10,
    },
    info_personal: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    title: {
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-SemiBold',
    },
    text: {
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Regular',
    },
})