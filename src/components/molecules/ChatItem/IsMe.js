import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts, colors } from '../../../utils'

const IsMe = ({isme}) => {
    return (
        <View style={styles.container}>
            <View style={styles.chatContent}>
                <Text style={styles.text}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
            </View>
            <Text style={styles.date}>4.20</Text>
        </View>
    )
}

export default IsMe

const styles = StyleSheet.create({
    container : {
        alignItems : "flex-end",
        marginTop : 20,
        paddingRight : 16,
    },
    chatContent : {
        padding: 12,
        paddingRight : 18,
        backgroundColor : colors.cardLight,
        maxWidth : '70%',
        borderRadius : 10,
        borderBottomRightRadius : 0,
    },
    text : {
        fontSize : 14,
        fontFamily: fonts.primary.normal,
        color : colors.text.primary,
    },
    date : {
        fontSize : 11,
        fontFamily: fonts.primary.normal,
        color : colors.text.secondary,
        marginTop : 8,

    }
})
