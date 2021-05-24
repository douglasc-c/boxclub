import React, { useState } from 'react'
import { Dimensions, StyleSheet, View, Image, Text } from "react-native"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';


const SwiperShoes = ({ ...rest }) => {

    const [currentIndex, setCurrentTwoIndex] = useState(0)

    function handleNextSwipeTwo(index) {
        setCurrentTwoIndex(index)
    }

    return (
        <View style={styles.full}>
            <Swiper
                loop={true}
                autoplay={true}
                showsButtons={false}
                showsPagination={false}
                onIndexChanged={handleNextSwipeTwo}
                activeDotStyle={{}}>
                <View style={styles.swiperContainerTwo}>
                    <LinearGradient
                        colors={['#4FFC91', '#3FC974']}
                        size="small"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        style={styles.infoWinner}>
                        <Text style={styles.nameShoeTwo}>Air Jordan 1 Dark Mocha</Text>
                        <Text style={styles.nameWinner}>JOAO OLIVEIRA</Text>
                        <Text style={styles.infoData}>SORTEIO FINALIZADO EM:</Text>
                        <Text style={styles.dataPrize}>03/04/2021</Text>
                    </LinearGradient>
                </View>
            </Swiper>
        </View>
    )
}

export default SwiperShoes

const DEVICE_WIDTH = Dimensions.get('screen').width
const DEVICE_HEIGHT = Dimensions.get('screen').height

const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },

    swiperContainerTwo: {
        alignSelf: "center",
        width: DEVICE_WIDTH * .8,
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .015 : DEVICE_HEIGHT * .015,
    },
    infoWinner: {
        borderRadius: 20,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4FFC91',
    },
    nameShoeTwo: {
        fontSize: RFPercentage(2.3),
        fontFamily: 'Montserrat-Black',
        textAlign: 'center',
        marginBottom: 4,
    },
    nameWinner: {
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
    },
    infoData: {
        marginTop: 4,
        fontSize: RFPercentage(1.8),
        fontFamily: 'Montserrat-Light',
    },
    dataPrize: {
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Bold',
    },
})