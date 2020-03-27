import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SocialIcon } from 'react-native-elements'
import * as firebase from 'firebase'
import * as Facebook from 'expo-facebook'
import { facebookApi } from '../../Tools/Social'
import Loading from '../Loading'


const LoginFacebook = ({ toastRef, navigation }) => {
    const [visible, setVisible] = useState(false)

    const login = async () => {
        setVisible(true)
        await Facebook.initializeAsync(facebookApi.application_id)
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(
            facebookApi.application_id,
            { permissions: facebookApi.permissions }
        )
        if (type === 'success') {
            const credentials = await firebase.auth.FacebookAuthProvider.credential(token)
            firebase.auth().signInWithCredential(credentials)
                .then(() => navigation.navigate("My Account"))
                .catch((err) => toastRef.current.show(err.toString()))
        } else if (type === "cancel") toastRef.current.show("Inicio de sesión cancelado")
        else toastRef.current.show("Algo ha salido mal")
        setVisible(false)
    }
    return (
        <>
            <SocialIcon
                title="Iniciar sesion con Facebook"
                button
                type="facebook"
                onPress={login}
            />
            <Loading text="Cargando" isVisible={visible} />
        </>
    )
}

export default LoginFacebook

const styles = StyleSheet.create({})
