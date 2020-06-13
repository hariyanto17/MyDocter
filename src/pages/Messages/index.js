import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {List} from '../../components'

import { colors, fonts } from '../../utils'
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets'

const Messages = ({navigation}) => {
    const [doctors] = useState ([
        {
            id : 1,
            profile : DummyDoctor4,
            name : 'alexander Janie',
            desc : 'Baik ibu, terimah kasih banyak atas wakt...'
        },
        {
            id : 2,
            profile : DummyDoctor5,
            name : 'Nairobi Putri Hayza',
            desc : 'Oh tentu saja tidak karena jeruk it...'
        },
        {
            id : 3,
            profile : DummyDoctor6,
            name : 'Jhon McParker Steve',
            desc : 'Oke menurut pak dokter bagaimana unt...'
        },
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title} >Messages</Text>
                {doctors.map(doctor => {
                    return <List key={doctor.id} profile={doctor.profile} name={doctor.name} desc={doctor.desc} onPress={() => navigation.navigate('Chatting')}/>
                })}
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.secondary,
        flex : 1,
    },
    content : {
        backgroundColor : colors.white,
        flex : 1,
        borderBottomRightRadius : 20,
        borderBottomStartRadius : 20,
    },
    title : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginTop : 30,
        marginLeft : 16,

    }
})
