import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { IconNext, IconEditProfile, IconLanguage, IconRate } from '../../../assets'

const List = ({profile, name, desc, type, onPress, icon}) => {
    const Icon =() => {
        if (icon === 'edit-profile') {
            return <IconEditProfile/>
        }
        if (icon === 'language') {
            return <IconLanguage/>
        }
        if (icon === 'rate') {
            return <IconRate/>
        }
        if (icon === 'help') {
            return <IconRate/>
        }
        return <IconEditProfile/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon/> : <Image source={profile} style={styles.avatar} />}
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {
                type === 'next' && <IconNext/> 
            }
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    avatar : {
        width : 46,
        height : 46,
        borderRadius : 46/2,

    },
    container : {
        flexDirection : "row",
        padding : 16,
        alignItems : "center",
        borderBottomWidth : 1,
        borderBottomColor : colors.border,
        justifyContent : "space-between"
    },
    content : {flex : 1,  marginLeft : 16,},
    name : {
        fontSize : 16,
        fontFamily : fonts.primary.normal,
        color : colors.text.primary,
    },
    desc : {
        fontSize : 12,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary,
    }
})
