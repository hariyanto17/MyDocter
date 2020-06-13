import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components'
import { fonts, colors } from '../../utils'

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Nairobi Putri Haysa" type="dark-profile" onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
                <ChatItem isme/>
                <ChatItem/>
                <ChatItem isme/>
            </View>
            <InputChat/>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white, flex :1,
    },
    content : {
        flex : 1,
    },
    chatDate : {
        fontSize : 11,
        fontFamily : fonts.primary.normal,
        color : colors.text.secondary,
        marginVertical : 20,
        textAlign : "center"
    }
})
