import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ILLogo } from '../../assets'
import { Input, Link, Button, Gap, Loading } from '../../components'
import { colors, fonts, useForm, storeData } from '../../utils'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'

const Login = ({navigation}) => {
    const [form, setForm] = useForm({email:'', password:''})

    const [loading, setLoading] = useState(false)


    const login = () => {
        setLoading(true);
        Fire.auth().signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            setForm('reset');
            Fire.database()
            .ref(`users/${res.user.uid}/`)
            .once('value')
            .then(resDB => {
                if (resDB.val()){
                    storeData('user', resDB.val())
                    navigation.replace('MainApp')
                    setLoading(false);

                    }
                })
            
        })
        .catch(err => {
            setLoading(false);
            showMessage({
                message: err.message,
                type: "default",
                backgroundColor : colors.error,
                color : colors.white,
              });
        })
    }
    return (
        <>
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Gap height={40}/>
                    <ILLogo/>
                    <Text style={styles.title} >Masuk dan mulai berkonsultasi</Text>
                    <Input 
                        label="Email Address" 
                        value={form.email} 
                        onChangeText={(value) => setForm('email',value)} />
                    <Gap height={24}/>
                    <Input 
                        label="Password" 
                        secureTextEntry 
                        value={form.password} 
                        onChangeText={(value) => setForm('password',value)} />
                    <Gap height={10}/>
                    <Link  size={12} title="Forgot My Password" />
                    <Gap height={40}/>
                    <Button title="Sign In" onPress={login}/>
                    <Gap height={30}/>
                    <Link align="center" size={16} title="Create New Account" onPress={() => navigation.navigate('Register')} />
                </ScrollView>
            </View>
            {loading && <Loading/>}
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    page : {
        paddingHorizontal : 40,
        flex : 1,
        backgroundColor: colors.white
    },
    title : {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color : colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153,
    }
})
