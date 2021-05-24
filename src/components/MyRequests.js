import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Animated, StatusBar, Dimensions, Keyboard, Platform, Image, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

const MyRequests = ({ ...rest }) => {


    const DATA = [
        {
            order: 121,
            date: '03-04-2021',
            status: 'PAGO'
            // numbers: [32, 12, 23, 45]
        },
        {
            order: 321,
            date: '14-04-2021',
            status: 'PAGO'
            // numbers: [32, 12, 23, 45]
        },
        {
            order: 421,
            date: '25-04-2021',
            status: 'PAGO'
            // numbers: [32, 12, 23, 45]
        },
    ]

    return (
        <LinearGradient style={styles.myrequest}
            colors={['#3FC974', '#4FFC91']}
            size="small"
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            locations={[0, 1, 1]}
            activeOpacity={0.7}
            containerStyle={{ flex: 1, marginLeft: 20, marginTop: 115 }}>

            <View style={styles.view_my_request}>
                <Text style={styles.header_order}>PEDIDO</Text>
                <Text style={styles.header_date}>DATA</Text>
                <Text style={styles.header_status}>STATUS</Text>
                {/* <Text style={styles.header_numbers}>NÚMEROS</Text> */}
            </View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.my_requests}>
                        <View style={styles.view_order}>
                            <Text style={styles.order}>#{item.order}</Text>
                        </View>
                        <View style={styles.view_date}>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                        <View style={styles.view_status_paid_out}>
                            <Text style={styles.status}>{item.status}</Text>
                        </View>
                        {/* <View style={styles.view_numbers}>
                            {
                                item.numbers.map(number => (
                                    <View style={styles.content_number}>
                                        <Text style={styles.numbers}>{number}</Text>
                                    </View>
                                ))
                            }
                        </View> */}
                    </View>
                )}
                keyExtractor={item => item.id}
            />

        </LinearGradient>
    )
}

export default MyRequests

const DEVICE_WIDTH = Dimensions.get('screen').width
const DEVICE_HEIGHT = Dimensions.get('screen').height

const styles = StyleSheet.create({
    myrequest: {
        marginTop: DEVICE_HEIGHT * .03,
        width: DEVICE_WIDTH * .8,
        maxHeight: Platform.OS === 'ios' ? DEVICE_HEIGHT * .477 : DEVICE_HEIGHT * .4,
        borderRadius: 20,
    },
    view_my_request: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    },
    header_order: {
        textAlign: 'center',
        flex: 1,
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-SemiBold',
    },
    header_date: {
        textAlign: 'center',
        flex: 2,
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-SemiBold',
    },
    header_status: {
        textAlign: 'center',
        flex: 2,
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-SemiBold',
    },
    header_numbers: {
        textAlign: 'center',
        flex: 3,
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-SemiBold',
    },
    view_order: {
        flex: 1,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_date: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
    },
    view_status_paid_out: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        backgroundColor: '#21ab56', //paid_out
        borderRadius: 5
    },
    view_status_pading: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        backgroundColor: '#FFB547', //pading
        borderRadius: 5
    },
    view_status_canceled: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        backgroundColor: '#F20068', //canceled
        borderRadius: 5
    },
    view_numbers: {
        flexDirection: 'row',
        flex: 3,
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: 3
    },
    content_number: {
        borderRadius: 50,
        backgroundColor: '#000',
        margin: 3,
        width: Platform.OS === 'ios' ? DEVICE_HEIGHT * .034 : DEVICE_HEIGHT * .04,
        height: Platform.OS === 'ios' ? DEVICE_HEIGHT * .034 : DEVICE_HEIGHT * .04,
        justifyContent: 'center',
        alignItems: 'center'
    },
    my_requests: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    },
    order: {
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Medium',
    },
    date: {
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Medium',
    },
    status: {
        fontSize: RFPercentage(1.5),
        fontFamily: 'Montserrat-ExtraBold',
        color: '#fff'
    },
    numbers: {
        textAlign: 'center',
        color: '#fff',
        padding: 5,
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Medium',
    },
})