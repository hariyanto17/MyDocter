import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { showMessage } from 'react-native-flash-message'
import { Header, Profile, Input, Button, Gap } from '../../components'
import { colors, getData, storeData } from '../../utils'
import { Fire } from '../../config'
import { ILNullPhoto } from '../../assets'

const UpdateProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName : '',
        profession : '',
        email : '',
    });

    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(ILNullPhoto);
    const [photoForDB, setPhotoForDB] = useState('')

    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            data.photoForDB = res?.photo?.length > 1 ? res.photo : ILNullPhoto;
            const tempPhoto = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto;
            setPhoto(tempPhoto);
            setProfile(data);
        })
    }, [])

    const update = () => {
        // console.log(profile)        
        console.log('password', password)
        if (password.length > 0) {
            if (password.length < 6) {
                showMessage({
                    message : 'password kurang dari 6',
                    type : 'default',
                    backgroundColor : colors.error,
                    color : 'white'
                })
            } else {
                updatePassword();
                updateProfileData()
                navigation.replace('MainApp')
            }
        }else {
            updateProfileData()
            navigation.replace('MainApp')

        }
    }

    const updatePassword = () => {
        Fire.auth().onAuthStateChanged(user => {
            if(user){
                user.updatePassword(password).catch(err => {
                    showMessage({
                        message :err.message,
                        type : 'default',
                        backgroundColor : colors.error,
                        color : 'white'
                    })
                })
            }
        })
    }

    const updateProfileData = () => {
        const data = profile;
        data.photo = photoForDB;

        Fire.database()
        .ref('users/' + profile.uid + '/')
        .update(data)
        .then(() => {
            storeData('user', data)
        })
        .catch(err => {
            showMessage({
                message : err.message,
                type : 'default',
                backgroundColor : colors.error,
                color: colors.white,
            })
        })
    }

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key] : value,
        })
    }

    const getImage = () => {
        ImagePicker.launchImageLibrary(
            {quality: 0.5, maxWidth: 200, maxHeight: 200},
          response => {
            if (response.didCancel || response.error) {
                showMessage({
                    message : 'oops, sepertinya anda tidak memilih foto nya?',
                    type : 'default',
                    backgroundColor : colors.error,
                    color: colors.white,
                })
            } else {
                console.log('respons get Image', response)
              const source = {uri: response.uri};
              setPhotoForDB(`data:${response.type};base64, ${response.data}`);
              
              setPhoto(source);
            }
          },
        )
    }

    return (
        <View style={styles.page}>
            <Header title="Update Profile" onPress={() => navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={photo} onPress={getImage} />
                    <Gap height={26}/>
                    <Input label="Full Name" value={profile.fullName} onChangeText={(value) => changeText('fullName', value)} />
                    <Gap height={24}/>
                    <Input label="Pekerjaan" value={profile.profession} onChangeText={(value) => changeText('profession', value)} />
                    <Gap height={24}/>
                    <Input label="Email" disable value={profile.email}/>
                    <Gap height={24}/>
                    <Input label="Password" value={password} secureTextEntry onChangeText={(value) => setPassword(value) }/>
                    <Gap height={40}/>
                    <Button title="Save Profile" onPress={update}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1,
    },
    content : {
        padding : 40,
        paddingTop : 0,
    }
})
