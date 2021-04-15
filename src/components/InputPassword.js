import React, { useState } from 'react'
import { TextInput, Dimensions, StyleSheet, TouchableOpacity, View } from "react-native"
import { RFPercentage } from 'react-native-responsive-fontsize'


const InputPassword = ({ ...rest }) => {
    
    const [notShow, setNotShow] = useState(true)

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholderTextColor='#fff'
                autoCorrect={false}
                secureTextEntry={notShow}
                {...rest}
            />
        </View>
    )
}

export default InputPassword

const DEVICE_WIDTH = Dimensions.get('screen').width
const DEVICE_HEIGHT = Dimensions.get('screen').height

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        borderColor: '#424242',
        borderRadius: 50,
        color: '#fff',
        width: DEVICE_WIDTH * .8,
        height: DEVICE_HEIGHT * .075,
        marginTop: DEVICE_HEIGHT * .01,
        paddingLeft: DEVICE_WIDTH * .05,
    },
})
