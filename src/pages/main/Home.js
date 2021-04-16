import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, StatusBar, Dimensions, Keyboard, Platform, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'

import Logo from '../../assets/icons/Logo.svg';
import Mocha from '../../assets/png/Mocha.png';


export default function aaa() {
    const navigation = useNavigation()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentTwoIndex, setCurrentTwoIndex] = useState(0)

    function handleNextSwipe(index) {
        setCurrentIndex(index)
    }
    function handleNextSwipeTwo(index) {
        setCurrentTwoIndex(index)
    }

    return (
        <View style={styles.full}>
            <StatusBar barStyle='light-content' />
            <Logo width={DEVICE_WIDTH * .4} height={DEVICE_WIDTH * .2} style={styles.logo} />
            <Text style={styles.textTitle}>SORTEIOS</Text>
            <Swiper
                loop={false}
                autoplay={false}
                showsButtons={false}
                showsPagination={false}
                onIndexChanged={handleNextSwipe}
                activeDotStyle={{}}>
                <View style={styles.swiperContainer}>
                    <View style={styles.shoeContainer}>
                        <Image style={styles.imageShoe} source={Mocha} />
                    </View>

                    <View style={styles.infoContainer}>
                        <View style={{ flex: 1.5, paddingRight: 10 }}>
                            <Text style={styles.nameShoe}>Air Jordan 1 Dark Mocha</Text>
                        </View>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={styles.valueShoe}>R$25,00</Text>
                            <Text style={styles.valueText}>Preço por número</Text>
                        </View>
                    </View>

                    <LinearGradient style={styles.containerPrize}
                        colors={['#0D0D0D', '#707070']}
                        size="small"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={{ flex: 1, marginLeft: 20, marginTop: 115 }}>
                        <Text style={styles.prizeDraw}>SORTEIO</Text>
                        <Text style={styles.drawNumber}>#004</Text>
                    </LinearGradient>
                </View>
            </Swiper>

            <View style={styles.swiper}>
                <View style={[styles.dot, currentIndex == 0 && { backgroundColor: '#4FFC91' }]} />
            </View>

            <Text style={styles.textTitle2}>ULTIMOS GANHADORES</Text>

            <Swiper
                loop={true}
                autoplay={true}
                showsButtons={false}
                showsPagination={false}
                onIndexChanged={handleNextSwipeTwo}
                activeDotStyle={{}}>
                <View style={styles.swiperContainerTwo}>
                    <View style={styles.infoWinner}>
                        <Text style={styles.nameShoeTwo}>Air Jordan 1 Dark Mocha</Text>
                        <Text style={styles.nameWinner}>IVAN OLIVEIRA</Text>
                        <Text style={styles.infoData}>SORTEIO FINALIZADO EM:</Text>
                        <Text style={styles.dataPrize}>03/04/21</Text>
                    </View>
                </View>
            </Swiper>

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


    swiperContainer: {
        alignSelf: "center",
    },

    shoeContainer: {
        width: DEVICE_WIDTH * .8,
        height: DEVICE_HEIGHT * .179,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
    },
    imageShoe: {
        resizeMode: 'contain',
        width: DEVICE_WIDTH * .45,
        height: DEVICE_HEIGHT * .45,
    },
    infoContainer: {
        width: DEVICE_WIDTH * .8,
        // height: DEVICE_HEIGHT * .14,
        height: Platform.OS === 'ios' ? DEVICE_HEIGHT * .13 : DEVICE_HEIGHT * .1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4FFC91',
        flexDirection: 'row',
    },
    nameShoe: {
        paddingLeft: 10,
        fontSize: RFPercentage(2.3),
        fontFamily: 'Montserrat-Black',
    },
    containerPrize: {
        backgroundColor: '#000',
        justifyContent: 'center',
        // alignSelf: 'center',
        borderRadius: 50,
        position: 'absolute',
        // marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .137 : DEVICE_HEIGHT * .137,
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .01 : DEVICE_HEIGHT * .01,
        marginLeft: Platform.OS === 'ios' ? DEVICE_HEIGHT * .01 : DEVICE_HEIGHT * .01,
        width: Platform.OS === 'ios' ? DEVICE_HEIGHT * .085 : DEVICE_HEIGHT * .082,
        height: Platform.OS === 'ios' ? DEVICE_HEIGHT * .085 : DEVICE_HEIGHT * .082,
    },
    prizeDraw: {
        textAlign: 'center',
        fontSize: RFPercentage(1),
        fontFamily: 'Montserrat-Medium',
        color: '#fff',
        alignSelf: 'center',
        letterSpacing: 0.5,
    },
    drawNumber: {
        textAlign: 'center',
        fontSize: RFPercentage(2.2),
        fontFamily: 'Montserrat-Black',
        color: '#fff',
        alignSelf: 'center',
    },
    valueShoe: {
        textAlign: 'right',
        paddingRight: 10,
        fontSize: RFPercentage(3),
        fontFamily: 'Montserrat-Black',
    },
    valueText: {
        textAlign: 'right',
        fontSize: RFPercentage(2),
        paddingRight: 10,
        fontFamily: 'Montserrat-Light',
    },


    swiper: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    dot: {
        marginHorizontal: 4,
        height: 12,
        width: 12,
        borderColor: '#FFFFFF',
        borderWidth: 1.4,
        borderRadius: 8,
    },

    textTitle2: {
        color: '#fff',
        textAlign: 'left',
        alignSelf: "baseline",
        fontSize: RFPercentage(2.5),
        fontFamily: 'Montserrat-Black',
        marginLeft: DEVICE_WIDTH * .1,
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .013 : DEVICE_HEIGHT * .013,
        // marginBottom: Platform.OS === 'ios' ? DEVICE_HEIGHT * .3 : DEVICE_HEIGHT * .23,
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