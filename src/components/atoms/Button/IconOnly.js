import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IconBackDark } from '../../../assets'

const IconOnly = ({onPress, icon}) => {
    const Icont = () => {
        if (icon === 'back-dark') {
            return <IconBackDark/>
        }
        if (icon === 'back-light') {
            return <IconBackDark/>
        }
        return <IconBackDark/>
    }
    return (
        <TouchableOpacity onPress={onPress} >
           <Icont/>
        </TouchableOpacity >
    )
}

export default IconOnly

const styles = StyleSheet.create({})
