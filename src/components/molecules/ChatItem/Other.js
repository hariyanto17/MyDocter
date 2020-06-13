import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { fonts, colors } from '../../../utils'
import { DummyDoctor9 } from '../../../assets'

export default function Other() {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor9} style={styles.avatar}/>
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
                </View>
                <Text style={styles.date}>4.20</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : "flex-end",
        marginTop : 20,
        paddingLeft : 16,
        flexDirection : "row",
    },
    avatar : {
     width : 30,
     height : 30,
     borderRadius : 30/2,
     marginRight : 12,
    },
    chatContent : {
        padding: 12,
        paddingLeft : 18,
        backgroundColor : colors.primary,
        maxWidth : '80%',
        borderRadius : 10,
        borderBottomLeftRadius : 0,
    },
    text : {
        fontSize : 14,
        fontFamily: fonts.primary.normal,
        color : colors.white,
    },
    date : {
        fontSize : 11,
        fontFamily: fonts.primary.normal,
        color : colors.text.secondary,
        marginTop : 8,

    }
})