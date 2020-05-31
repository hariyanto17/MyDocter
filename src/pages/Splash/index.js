import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { colors } from '../../utils'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000);
    },[])
    return (
        <View style={styles.page}>
        <ILLogo/>
        <Text style={styles.title}>My Docter</Text>
      </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page : {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center'
    },
    title : {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color:colors.text.primary,
        marginTop: 20
    }
})
