import * as React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { RFPercentage } from 'react-native-responsive-fontsize'

import HomeBlack from '../assets/icons/HomeBlack'
import CodeBlack from '../assets/icons/CodeBlack'
import TicketBlack from '../assets/icons/TicketBlack'
import AccountBlack from '../assets/icons/AccountBlack'

import Home from '../pages/main/Home'
import Settings from '../pages/Settings/Settings'

const DEVICE_HEIGHT = Dimensions.get('screen').height;
const DEVICE_WIDTH = Dimensions.get('screen').width;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Initial">
            <Stack.Screen
                name="Initial"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
function CodeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Initial"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
function TicketStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Initial"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
function SettingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#000',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: '#4FFC91',
                    // borderTopLeftRadius: 20,
                    // borderTopRightRadius: 20,
                    height: DEVICE_HEIGHT * 0.1,
                    paddingBottom:
                        Platform.OS === 'ios' ?
                            DEVICE_HEIGHT * 0.015
                            :
                            DEVICE_HEIGHT * 0.01,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: ({ focused, color }) => (
                        focused && <View style={styles.lineUnder}></View>
                    ),
                    tabBarIcon: ({ focused }) =>
                        focused ?
                            (<HomeBlack
                                width={DEVICE_WIDTH * 0.06}
                                heigth={DEVICE_WIDTH * 0.06} />)
                            :
                            (<HomeBlack
                                width={DEVICE_WIDTH * 0.06}
                                heigth={DEVICE_WIDTH * 0.06} />),
                }} />
            <Tab.Screen
                name="Meus Numeros"
                component={CodeStack}
                options={{
                    tabBarLabel: ({ focused, color }) => (
                        focused && <View style={styles.lineUnder}></View>
                    ),
                    tabBarIcon: ({ focused }) =>
                        focused ?
                            (<CodeBlack
                                width={DEVICE_WIDTH * 0.06}
                                heigth={DEVICE_WIDTH * 0.06} />)
                            :
                            (<CodeBlack
                                width={DEVICE_WIDTH * 0.06}
                                heigth={DEVICE_WIDTH * 0.06} />),
                }} />
            <Tab.Screen
                name="Sorteios"
                component={TicketStack}
                options={{
                    tabBarLabel: ({ focused, color }) => (
                        focused && <View style={styles.lineUnder}></View>
                    ),
                    tabBarIcon: ({ focused }) =>
                        focused ?
                            (<TicketBlack
                                width={DEVICE_WIDTH * 0.06}
                                heigth={DEVICE_WIDTH * 0.06} />)
                            :
                            (<TicketBlack
                                width={DEVICE_WIDTH * 0.06}
                                heigth={DEVICE_WIDTH * 0.06} />),
                }} />
            <Tab.Screen
                name="Minha Conta"
                component={SettingStack}
                options={{
                    tabBarLabel: ({ focused, color }) => (
                        focused && <View style={styles.lineUnder}></View>
                    ),
                    tabBarIcon: ({ focused }) =>
                        focused ?
                            (<AccountBlack
                                width={DEVICE_WIDTH * 0.06}
                                heigth={DEVICE_WIDTH * 0.06} />)
                            :
                            (<AccountBlack
                                width={DEVICE_WIDTH * 0.06}
                                heigth={DEVICE_WIDTH * 0.06} />),
                }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    lineUnder: {
        height: DEVICE_HEIGHT * 0.005,
        width: DEVICE_WIDTH * 0.07,
        borderRadius: 10,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? DEVICE_HEIGHT * 0.009 : DEVICE_HEIGHT * 0.015,
    }
});
