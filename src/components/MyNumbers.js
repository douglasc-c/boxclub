import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Animated, StatusBar, Dimensions, Keyboard, Platform, Image, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

const MyNumbers = ({ ...rest }) => {


    const DATA = [
        {
            id: 1,
            date: '03-04-2021',
            numbers: [32, 12, 23, 45]
        },
        {
            id: 2,
            date: '14-04-2021',
            numbers: [32, 12, 23, 45]
        },
        {
            id: 3,
            date: '25-04-2021',
            numbers: [32, 12, 23, 45]
        },
    ]

    return (
        <LinearGradient style={styles.mynumbers}
            colors={['#3FC974', '#4FFC91']}
            size="small"
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            locations={[0, 1, 1]}
            activeOpacity={0.7}
            containerStyle={{ flex: 1, marginLeft: 20, marginTop: 115 }}>

            <View style={styles.view_my_numbers}>
                <Text style={styles.header_raffle}>RIFA</Text>
                <Text style={styles.header_date}>DATA</Text>
                <Text style={styles.header_numbers}>NÚMEROS</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.my_numbers}>
                        <View style={styles.view_raffle}>
                            <Text style={styles.raffle}>#{item.id}</Text>
                        </View>
                        <View style={styles.view_date}>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                        <View style={styles.view_numbers}>
                            {
                                item.numbers.map(number => (
                                    <View style={styles.content_number}>
                                        <Text style={styles.numbers}>{number}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id}
            />

        </LinearGradient>
    )
}

export default MyNumbers

const DEVICE_WIDTH = Dimensions.get('screen').width
const DEVICE_HEIGHT = Dimensions.get('screen').height

const styles = StyleSheet.create({
    mynumbers: {
        marginTop: DEVICE_HEIGHT * .03,
        width: DEVICE_WIDTH * .8,
        maxHeight: Platform.OS === 'ios' ? DEVICE_HEIGHT * .477 : DEVICE_HEIGHT * .4,
        borderRadius: 20,
    },
    view_my_numbers: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    },
    header_raffle: {
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
    header_numbers: {
        textAlign: 'center',
        flex: 3,
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-SemiBold',
    },
    view_raffle: {
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
    my_numbers: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    },
    raffle: {
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Medium',
    },
    date: {
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Medium',
    },
    numbers: {
        textAlign: 'center',
        color: '#fff',
        padding: 5,
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Medium',
    },
})