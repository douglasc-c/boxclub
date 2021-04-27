import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Dimensions,
    Platform,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'

import Shoe from '../../assets/icons/Shoe'
import IconLogo from '../../assets/icons/IconLogo'
import Logo from '../../assets/icons/Logo'
import ShoeLeth from '../../assets/icons/ShoeLeft'
import ShoeRight from '../../assets/icons/ShoeRight'
import Win from '../../assets/icons/Win'


export default function SwiperPage() {
    const navigation = useNavigation()
    const [currentIndex, setCurrentIndex] = useState(0)

    function handleNextPage() {
        if (currentIndex != 3) return
        navigation.navigate('Tabs')
    }

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
                dotStyle={{}}
                onIndexChanged={handleNextSwipe}
                activeDotStyle={{}}>

                <View style={styles.full}>
                    <View style={styles.container}>
                        <View style={styles.imagesContainer}>
                            <Shoe
                                style={styles.imagesShoe}
                                width={DEVICE_WIDTH * .4}
                                height={DEVICE_HEIGHT * .3}>
                            </Shoe>
                            <Logo
                                style={styles.imagesLogo}>
                            </Logo>
                        </View>
                        <View style={styles.textContent}>
                            <Text style={styles.txt1}>Através dos nossos sorteios você tem a chance de ganhar seu sneaker dos sonhos. </Text>
                            <Text style={styles.txt2}>Confira os sneakers disponíveis e participe, seja você o próximo ganhador!</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.full}>
                    <IconLogo style={styles.logoLittle} />
                    <View style={styles.box}>
                        <ShoeRight style={styles.iconsCard} width={DEVICE_WIDTH * .25}
                            height={DEVICE_HEIGHT * .15} />
                        <Text style={styles.txt4}>ESCOLHA</Text>
                        <Text style={styles.txt5}>Registre-se na boxclub e </Text>
                        <Text style={styles.txt5}>selecione seus números.</Text>
                    </View>
                </View>

                <View style={styles.full}>
                    <IconLogo style={styles.logoLittle} />
                    <View style={styles.box}>
                        <ShoeLeth style={styles.iconsCard} width={DEVICE_WIDTH * .25}
                            height={DEVICE_HEIGHT * .15} />
                        <Text style={styles.txt4}>PAGAMENTO</Text>
                        <Text style={styles.txt5}>Finalize seu pagamento</Text>
                        <Text style={styles.txt5}>(PIX / Mercado pago).</Text>
                    </View>
                </View>

                <View style={styles.full}>
                    <IconLogo style={styles.logoLittle} />
                    <View style={styles.box}>
                        <Win style={styles.iconsCard} width={DEVICE_WIDTH * .25}
                            height={DEVICE_HEIGHT * .15} />
                        <Text style={styles.txt4}>RESULTADO</Text>
                        <Text style={styles.txt5}>Aguarde o resultado pela</Text>
                        <Text style={styles.txt5}>Loteria Federal!</Text>
                        <TouchableOpacity onPress={handleNextPage} style={styles.button}>
                            <Text style={styles.txtButton}>ENTRE AGORA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Swiper>

            <View style={{ alignItems: 'center', marginBottom: DEVICE_HEIGHT * .02, }}>
                <Text style={styles.txt3}>Deslize para conhecer mais</Text>
            </View>
            <View style={styles.swiper}>
                <View style={[styles.dot, currentIndex == 0 && { backgroundColor: '#4FFC91' }]} />
                <View style={[styles.dot, currentIndex == 1 && { backgroundColor: '#4FFC91' }]} />
                <View style={[styles.dot, currentIndex == 2 && { backgroundColor: '#4FFC91' }]} />
                <View style={[styles.dot, currentIndex == 3 && { backgroundColor: '#4FFC91' }]} />
            </View>
            <StatusBar barStyle="light-content" />
        </View >
    )
}

const DEVICE_WIDTH = Dimensions.get('screen').width
const DEVICE_HEIGHT = Dimensions.get('screen').height

const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: '#000'
    },
    swiper: {
        marginBottom: Platform.OS === 'ios' ? DEVICE_HEIGHT * .1 : DEVICE_HEIGHT * .05,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#000'
    },
    dot: {
        marginHorizontal: 4,
        height: 14,
        width: 14,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 8,
    },
    container: {
        height: Platform.OS === 'ios' ? DEVICE_HEIGHT * .8 : DEVICE_HEIGHT * .7,
        justifyContent: 'center',
    },
    imagesContainer: {
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .1 : DEVICE_HEIGHT * .07,
        justifyContent: 'center',
    },
    imagesShoe: {
        alignSelf: 'center',
    },
    imagesLogo: {
        alignSelf: 'center',
    },
    iconsCard: {
        alignSelf: 'center',
    },
    imagesLogo: {
        alignSelf: 'center',
    },
    textContent: {
        width: Platform.OS === 'ios' ? DEVICE_WIDTH * .7 : DEVICE_WIDTH * .67,
        alignSelf: 'center',
    },
    txt1: {
        fontSize: 17,
        fontFamily: 'Montserrat-Medium',
        color: '#FFFFFF',
        lineHeight: 18,
        textAlign: 'center',
        marginTop: 30,
    },
    txt2: {
        fontSize: 17,
        fontFamily: 'Montserrat-Medium',
        color: '#FFFFFF',
        lineHeight: 20,
        textAlign: 'center',
        marginTop: 20
    },
    txt3: {
        fontSize: 13,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
        lineHeight: 18,
    },
    txt4: {
        fontSize: RFPercentage(2.9),
        fontFamily: 'Montserrat-Black',
        color: '#151515',
        textAlign: 'center',
        marginBottom: DEVICE_HEIGHT * .02,
    },
    txt5: {
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Regular',
        color: '#151515',
        textAlign: 'center',
        width: DEVICE_WIDTH * .5,
        alignSelf: 'center',
        marginVertical: DEVICE_HEIGHT * .001,
    },
    logoLittle: {
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .08 : DEVICE_HEIGHT * .04,
    },
    box: {
        backgroundColor: '#4FFC91',
        width: DEVICE_WIDTH * .7,
        height: DEVICE_HEIGHT * .3,
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * .18 : DEVICE_HEIGHT * .15,
    },
    button: {
        width: DEVICE_WIDTH * .7,
        height: DEVICE_HEIGHT * .06,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#4FFC91',
        marginTop: DEVICE_HEIGHT * .16,
        borderRadius: 30,
    },
    txtButton: {
        color: '#151515',
        fontSize: RFPercentage(2.0),
        fontFamily: 'Montserrat-Black',
    },


})
