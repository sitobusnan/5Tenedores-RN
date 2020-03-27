import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Icon, Button, registerCustomIconType } from 'react-native-elements'

import * as firebase from 'firebase'

import Loading from '../Loading'

import { validateEmail } from '../../Tools/validateEmail'

const SignUpFrom = ({ toastRef, navigation }) => {

    const [hidePasword, setHidePassword] = useState(true)
    const [hideRepeatPasword, setHideRepeatPassword] = useState(true)
    const [visibleLoading, setVisibleLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPasword, setRepeatPasword] = useState('')


    const register = () => {
        setVisibleLoading(true)
        if (!email || !password || !repeatPasword) {
            toastRef.current.show('Todos los campos son obligatorios')
        } else {
            if (!validateEmail(email)) {
                toastRef.current.show('Formato de email incorrecto')

            } else {
                if (password !== repeatPasword) {
                    toastRef.current.show('Las contraseñas no coinciden')
                } else {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(() => navigation.navigate('My Account'))
                        .catch(err => toastRef.current.show(err.toString()))
                }
            }
        }
        setVisibleLoading(false)

    }

    return (
        <View style={styles.formContainer} >
            <Input
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                onChange={(e) => { setEmail(e.nativeEvent.text) }}
                rightIcon={<Icon type='material-community' name='at' iconStyle={styles.iconRight} />}
            />
            <Input
                placeholder="Password"
                password={true}
                secureTextEntry={hidePasword}
                containerStyle={styles.inputForm}
                onChange={(e) => setPassword(e.nativeEvent.text)}
                rightIcon={<Icon type='material-community' name={hidePasword ? 'eye-off-outline' : 'eye-outline'}
                    iconStyle={styles.iconRight} onPress={() => setHidePassword(!hidePasword)} />}
            />
            <Input
                placeholder="Repeat Password"
                password={true}
                secureTextEntry={hideRepeatPasword}
                containerStyle={styles.inputForm}
                onChange={(e) => setRepeatPasword(e.nativeEvent.text)}
                rightIcon={<Icon type='material-community' name={hideRepeatPasword ? 'eye-off-outline' : 'eye-outline'} iconStyle={styles.iconRight}
                    onPress={() => setHideRepeatPassword(!hidePasword)} />}
            />

            <Button
                title="SignUp"
                containerStyle={styles.btnContainerSignUp}
                buttonStyle={styles.btnSigUp}
                onPress={register}
            />
            <Loading text="Creando cuanta" isVisible={visibleLoading} />

        </View>
    )
}

export default SignUpFrom

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
    btnContainerSignUp: {
        marginTop: 20,
        width: ' 95%'
    },
    btnSigUp: {
        backgroundColor: '#00a680'
    }
})
