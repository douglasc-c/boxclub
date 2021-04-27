import React, { useRef } from 'react'
import { Dimensions, StyleSheet, Animated, Text } from "react-native"
import { RFPercentage } from 'react-native-responsive-fontsize'
import LinearGradient from 'react-native-linear-gradient'

const BackgroundAnimated = ({ text, active, handlePress }) => {

    const FadeInView = (props) => {
        const fadeAnim = useRef(new Animated.Value(active ? 0 : 1)).current

        React.useEffect(() => {
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 700,
                }
            ).start();
        }, [fadeAnim])

        return (
            <Animated.View
                onTouchEnd={() => {
                    handlePress()
                    Animated.timing(
                        fadeAnim,
                        {
                            toValue: 1,
                            duration: 700,
                        }
                    ).start();
                }}
                style={{
                    ...props.style,
                    opacity: fadeAnim,
                }}
            >
                {props.children}
            </Animated.View>
        );
    }

    return (

        <FadeInView>
            <LinearGradient style={styles.selected}
                colors={active ? ['#0D0D0D', '#47E282'] : ['#0000', '#0000']}
                size="small"
                start={{ x: 0.0, y: 0.25 }} end={{ x: 1, y: 1.0 }}
                locations={[0, 1, 0]}
                activeOpacity={0.7}
                containerStyle={{ flex: 1, marginLeft: 20, marginTop: 115 }}
            >
                <Text style={active ? styles.textSelected : styles.text}>
                    {text}
                </Text>
            </LinearGradient>
        </FadeInView>
    )
}

export default BackgroundAnimated

const DEVICE_WIDTH = Dimensions.get('screen').width
const DEVICE_HEIGHT = Dimensions.get('screen').height

const styles = StyleSheet.create({
    textSelected: {
        lineHeight: 30,
        color: '#fff',
        textAlign: 'left',
        fontSize: RFPercentage(2.5),
        fontFamily: 'Montserrat-Medium',
        paddingHorizontal: DEVICE_WIDTH * .05,
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



