import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Header, Input, Button, Gap, Loading } from '../../components'
import { colors, useForm, storeData, getData } from '../../utils'
import { Fire } from '../../config'
import { showMessage } from "react-native-flash-message";

const Redister = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName : '',
    profession : '',
    email : '',
    password : ''
  })

  const [loading, setLoading] = useState(false)

  const onContinue = () => {
    setLoading(true)
    Fire.auth().
    createUserWithEmailAndPassword(form.email, form.password)
    .then((success) => {
      setLoading(false);
      setForm('reset');

      const data = {
        fullName : form.fullName,
        profession : form.profession,
        email : form.email,
        uid : success.user.uid
      }

      Fire.database()
      .ref('users/' + success.user.uid + '/')
      .set(data)

      storeData('user', data);
      navigation.navigate('UploadPhoto', data);
    })
    .catch((error) => {
      setLoading(false)
      const errorMessage = error.message;
      showMessage({
        message: errorMessage,
        type: "default",
        backgroundColor : colors.error,
        color : colors.white,
      });
    });
    
  }
    return (
      <>
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Daftar Akun"/>
            <View style={styles.content}>
              <ScrollView showsVerticalScrollIndicator={false} >
                <Input 
                  label="Full Name" 
                  value={form.fullName} 
                  onChangeText={(value) => setForm('fullName',value)} />
                <Gap height={24} />
                <Input 
                  label="Pekerjaan" 
                  value={form.profession} 
                  onChangeText={(value) => setForm('profession',value)} />
                <Gap height={24} />
                <Input 
                  label="Email" 
                  value={form.email} 
                  onChangeText={(value) => setForm('email',value)} />
                <Gap height={24} />
                <Input 
                label="Password" 
                  secureTextEntry 
                  value={form.password} 
                  onChangeText={(value) => setForm('password',value)} />
                <Gap height={40} />
                <Button title="Continue" onPress={onContinue} />
              </ScrollView>
            </View>
        </View>
        {loading && <Loading/>}
      </>
    )
}

export default Redister

const styles = StyleSheet.create({
  page : {backgroundColor: colors.white, flex : 1},
  content : {
    padding : 40,
    paddingTop: 0,
  }
})
