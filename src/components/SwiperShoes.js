import React, { useState } from 'react'
import { Dimensions, StyleSheet, View, Image, Text } from "react-native"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';

import Mocha from '../assets/png/Mocha.png';

const SwiperShoes = ({ ...rest }) => {

    const [currentIndex, setCurrentIndex] = useState(0)


    function handleNextSwipe(index) {
        setCurrentIndex(index)
    }

    return (
        <View style={styles.full}>
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

                    <LinearGradient
                        colors={['#4FFC91', '#3FC974']}
                        size="small"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7} 
                        style={styles.infoContainer}>
                        <View style={{ flex: 1.5, paddingRight: 10 }}>
                            <Text style={styles.nameShoe}>Air Jordan 1 Dark Mocha</Text>
                        </View>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={styles.valueShoe}>R$25,00</Text>
                            <Text style={styles.valueText}>Preço por número</Text>
                        </View>
                    </LinearGradient>

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
                <View style={styles.swiperContainer}>
                    <View style={styles.shoeContainer}>
                        <Image style={styles.imageShoe} source={Mocha} />
                    </View>

                    <LinearGradient
                        colors={['#4FFC91', '#3FC974']}
                        size="small"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7} 
                        style={styles.infoContainer}>
                        <View style={{ flex: 1.5, paddingRight: 10 }}>
                            <Text style={styles.nameShoe}>Air Jordan 1 Dark Mocha</Text>
                        </View>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={styles.valueShoe}>R$25,00</Text>
                            <Text style={styles.valueText}>Preço por número</Text>
                        </View>
                    </LinearGradient>

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
                <View style={styles.swiperContainer}>
                    <View style={styles.shoeContainer}>
                        <Image style={styles.imageShoe} source={Mocha} />
                    </View>

                    <LinearGradient
                        colors={['#4FFC91', '#3FC974']}
                        size="small"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7} 
                        style={styles.infoContainer}>
                        <View style={{ flex: 1.5, paddingRight: 10 }}>
                            <Text style={styles.nameShoe}>Air Jordan 1 Dark Mocha</Text>
                        </View>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={styles.valueShoe}>R$25,00</Text>
                            <Text style={styles.valueText}>Preço por número</Text>
                        </View>
                    </LinearGradient>

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
                <View style={styles.swiperContainer}>
                    <View style={styles.shoeContainer}>
                        <Image style={styles.imageShoe} source={Mocha} />
                    </View>

                    <LinearGradient
                        colors={['#4FFC91', '#3FC974']}
                        size="small"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7} 
                        style={styles.infoContainer}>
                        <View style={{ flex: 1.5, paddingRight: 10 }}>
                            <Text style={styles.nameShoe}>Air Jordan 1 Dark Mocha</Text>
                        </View>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={styles.valueShoe}>R$25,00</Text>
                            <Text style={styles.valueText}>Preço por número</Text>
                        </View>
                    </LinearGradient>

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
                <View style={[styles.dot, currentIndex == 1 && { backgroundColor: '#4FFC91' }]} />
                <View style={[styles.dot, currentIndex == 2 && { backgroundColor: '#4FFC91' }]} />
                <View style={[styles.dot, currentIndex == 3 && { backgroundColor: '#4FFC91' }]} />
            </View>
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
        borderRadius: 50,
        position: 'absolute',
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
        marginBottom: Platform.OS === 'ios' ? DEVICE_HEIGHT * -.009 : DEVICE_HEIGHT * -.01
    },
    dot: {
        marginHorizontal: 4,
        height: 12,
        width: 12,
        borderColor: '#FFFFFF',
        borderWidth: 1.4,
        borderRadius: 8,
    },
})