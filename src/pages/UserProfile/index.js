import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import {Header, Profile, List, Gap} from '../../components'
import { colors, getData } from '../../utils'
import { ILNullPhoto } from '../../assets'
import { Fire } from '../../config'

const UserProfile = ({navigation}) => {
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

    const signOut = () => {
        Fire.auth().signOut().then(() => {
            console.log('log out success');
            navigation.replace('GetStarted')
        }).catch (err => {
            showMessage({
                message : err.message,
                type : 'default',
                backgroundColor : colors.error
            })
        })
    }
    return (
        <View style={styles.page}>
            <Header title="profile" onPress={() => navigation.goBack()}/>
            <Gap height={10}/>
            {profile.fullName.length > 0 && <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} />}
            
            <Gap height={14}/>
            <List name="Edit Profile" desc="last Update Yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate('UpdateProfile')} />
            <List name="Language" desc="last Update Yersterday" type="next" icon="language" />
            <List name="Give Us Rate" desc="last Update Yersterday" type="next" icon="rate" />
            <List name="Sign Out" desc="last Update Yersterday" type="next" icon="help" onPress={signOut} />
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.white,
    }
})
