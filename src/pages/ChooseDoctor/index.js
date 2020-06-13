import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, List } from '../../components'
import { DummyDoctor1 } from '../../assets'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type="dark" title="Pilih Doctor Anak" onPress={() => navigation.goBack()}/>
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor1} name="Alexander Janie" desc="wanita"/>
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor1} name="Alexander Janie" desc="wanita"/>
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor1} name="Alexander Janie" desc="wanita"/>
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor1} name="Alexander Janie" desc="wanita"/>
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor1} name="Alexander Janie" desc="wanita"/>
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1,
    }
})
