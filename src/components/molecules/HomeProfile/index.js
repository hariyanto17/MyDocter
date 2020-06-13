import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DummyUser, ILNullPhoto } from '../../../assets'
import { fonts, colors, getData} from '../../../utils'

const HomeProfile = ({onPress}) => {
    const [profile, setProfile] = useState({
        photo : ILNullPhoto,
        fullName : '',
        profession : '',
    });
    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            data.photo = {uri : res.photo};
            setProfile(res);
        })
    }, [])
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Image source={profile.photo} style={styles.avatar}/>
            <View style = {styles.main}>
                <Text style={styles.name} >{profile.fullName}</Text>
                <Text style={styles.Profession} >{profile.profession}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container : {
        flexDirection : "row"
    },
    avatar : {
        width : 46,
        height : 46,
        borderRadius : 46/2,
        marginRight : 12,
    },
    main : {
        flexDirection : "column"
    },
    name : {
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        textTransform : "capitalize",
    },
    Profession : {
        fontSize : 12,
        fontFamily : fonts.primary[400],
        color : colors.text.secondary,
        textTransform : "capitalize",
    }
})
