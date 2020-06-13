import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILLogo, ILGetStarted } from '../../assets'
import { Gap, Button} from '../../components'
import { colors, fonts } from '../../utils'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page} >
            <View>
            <ILLogo/>
            <Text style={styles.title}>konsultasi dengan dokter jadi lebih mudah & flexible</Text>
            </View>
            <View>
                <Button title="Get Started" onPress={() => navigation.navigate('Register') }/>
                <Gap height={16}/>
                <Button type="secondary" title="Sign In" onPress={() => navigation.navigate('Login') } />
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page : {
        padding : 40,
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.white
    },
    title : {
        fontSize: 28,
        marginTop : 91,
        color: colors.white,
        fontFamily: fonts.primary[600]
    }
})
