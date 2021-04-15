import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import Swiper from '../pages/StartPage/Swiper'
import recorverPassword from '../pages/recorverPassword/recorverPassword'
// import receiveTheEmail from '../pages/receiveTheEmail/ReceiveTheEmail'
import createAccount from '../pages/createAccount/createAccount'

import Tabs from './Tab.Routes'


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen
                    name="Swiper"
                    component={Swiper}
                    options={{ headerShown: false, gestureEnabled: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false, gestureEnabled: false }}
                />
                <Stack.Screen
                    name="createAccount"
                    component={createAccount}
                    options={{ headerShown: false, gestureEnabled: false }}
                />
                <Stack.Screen
                    name="recorverPassword"
                    component={recorverPassword}
                    options={{ headerShown: false, gestureEnabled: false }}
                />
                <Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{ headerShown: false, gestureEnabled: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
