import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Icon, Button, registerCustomIconType } from 'react-native-elements'

import * as firebase from 'firebase'

import Loading from '../Loading'

import { validateEmail } from '../../Tools/validateEmail'


const LoginForm = ({ toastRef, navigation }) => {
    const [state, setState] = useState({
        email: '',
        password: '',
        hidePasword: true,
        visibleLoading: false
    })

    const login = () => {
        setState({ ...state, visibleLoading: true })
        if (!state.email || !state.password) toastRef.current.show('Todos los campos son obligarios')
        else {
            if (!validateEmail(state.email)) toastRef.current.show('Email no válido')
            else {
                firebase.auth().signInWithEmailAndPassword(state.email, state.password)
                    .then(() => { navigation.navigate('My Account') })
                    .catch(err => toastRef.current.show(err.toString()))
            }
        }
        setState({ ...state, visibleLoading: false })
    }

    return (
        <View style={styles.formContainer} >
            <Input
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                onChange={(e) => { setState({ ...state, email: e.nativeEvent.text }) }}
                rightIcon={<Icon type='material-community' name='at' iconStyle={styles.iconRight} />}
            />
            <Input
                placeholder="Password"
                password={true}
                secureTextEntry={state.hidePasword}
                containerStyle={styles.inputForm}
                onChange={(e) => { setState({ ...state, password: e.nativeEvent.text }) }}
                rightIcon={<Icon type='material-community' name={state.hidePasword ? 'eye-off-outline' : 'eye-outline'}
                    iconStyle={styles.iconRight} onPress={() => setState({ ...state, hidePasword: !state.hidePasword })} />}
            />
            <Button
                title="Login"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={login}
            />
            <Loading text="Login en curso" isVisible={state.visibleLoading} />

        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    inputForm: {
        width: '100%',
        marginTop: 20
    },
    iconRight: {
        color: "#c1c1c1"
    },
    btnContainerLogin: {
        marginTop: 20,
        width: ' 95%'
    },
    btnLogin: {
        backgroundColor: '#00a680'
    }
})