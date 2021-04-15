import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, StatusBar, Dimensions, Keyboard } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'

import Logo from '../../assets/icons/Logo.svg';


export default function aaa() {
    const navigation = useNavigation()
    const [currentIndex, setCurrentIndex] = useState(0)

    function handleNextSwipe(index) {
        setCurrentIndex(index)
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

                    </View>
                    <View style={styles.infoContainer}>
                        <View style={{ flex: 1.5, paddingRight: 10 }}>
                            <Text style={styles.nameShoe}>Air Jordan 1 Unversity Blue</Text>
                        </View>
                        <View style={styles.containerPrize}
                            size="small"
                            rounded
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}>
                            <Text style={styles.prizeDraw}>SORTEIO</Text>
                            <Text style={styles.drawNumber}>#004</Text>
                        </View>
                        <View style={{ flex: 1.5, paddingRight: 10 }}>
                            <Text style={styles.valueShoe}>R$25,00</Text>
                            <Text style={styles.valueText}>Preço por número</Text>
                        </View>
                    </View>
                </View>
            </Swiper>

            <View style={styles.swiper}>
                <View style={[styles.dot, currentIndex == 0 && { backgroundColor: '#4FFC91' }]} />
            </View>

            <Text style={styles.textTitle2}>ULTIMOS GANHADORES</Text>

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
        // backgroundColor: 'yellow',
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .035 : DEVICE_HEIGHT * -.01,
    },
    textTitle: {
        color: '#fff',
        textAlign: 'right',
        alignSelf: "baseline",
        fontSize: RFPercentage(2.5),
        marginTop: DEVICE_WIDTH * .0,
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
        backgroundColor: '#fff',
    },
    infoContainer: {
        width: DEVICE_WIDTH * .8,
        height: DEVICE_HEIGHT * .14,
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
        textAlign: 'center',
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 100,

    },
    prizeDraw: {
        textAlign: 'center',
        fontSize: RFPercentage(1),
        fontFamily: 'Montserrat-light',
        color: '#fff'
    },
    drawNumber: {
        textAlign: 'center',
        fontSize: RFPercentage(1.3),
        fontFamily: 'Montserrat-Black',
        color: '#fff'
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
        marginBottom: Platform.OS === 'ios' ? DEVICE_HEIGHT * .00 : DEVICE_HEIGHT * .00,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 23,
        alignItems: 'center',
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
        marginBottom: Platform.OS === 'ios' ? DEVICE_HEIGHT * .31 : DEVICE_HEIGHT * .24,
    },
})