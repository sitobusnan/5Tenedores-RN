import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import * as firebase from 'firebase'

import { validateEmail } from '../../../Tools/validateEmail'
import { reLoad } from '../../../Tools/reLoad'

const ChangeEmail = ({ displayEmail, setisVisibleModal, setreloadData, toastRef }) => {
    const [state, setstate] = useState({
        text: "",
        error: "",
        errorP: "",
        isLoading: false,
        hidePasword: true,
        password: ""
    })

    const updateEmail = () => {
        setstate({ ...state, error: "" })
        if (!validateEmail(state.text) || state.text === displayEmail) setstate({ ...state, error: "Introduce un nuevo mail VALIDO" })
        else {
            setstate({ ...state, isLoading: true })
            reLoad(state.password)
                .then(() => {
                    firebase.auth().currentUser.updateEmail(state.text)
                        .then(() => {
                            setstate({ ...state, isLoading: false })
                            setreloadData(true)
                            toastRef.current.show("Email actualizado")
                            setisVisibleModal(false)
                        })
                        .catch(err => setstate({ ...state, errorP: "Error al actualizar", isLoading: false }))
                })
                .catch(err => {
                    console.log(err)
                    setstate({ ...state, errorP: "Error al validar", isLoading: false })

                })
        }
    }
    return (
        <View style={styles.view}>
            <Input
                placeholder="Email"
                containerStyle={styles.input}
                defaultValue={displayEmail && displayEmail}
                onChange={(e) => setstate({ ...state, text: e.nativeEvent.text })}
                rightIcon={{
                    type: "material-community",
                    name: "at",
                    color: "#c2c2c2"
                }}
                errorMessage={state.error}
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.input}
                pasword={true}
                secureTextEntry={state.hidePasword}
                onChange={(e) => setstate({ ...state, password: e.nativeEvent.text })}
                rightIcon={{
                    type: "material-community",
                    name: state.hidePasword ? "eye-off-outline" : "eye-outline",
                    color: "#c2c2c2",
                    onPress: () => setstate({ ...state, hidePasword: !state.hidePasword })
                }}
                errorMessage={state.errorP}
            />

            <Button
                title="Cambiar email"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={updateEmail}
                loading={state.isLoading}
            />
        </View>
    )
}

export default ChangeEmail

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 10
    },
    input: {
        marginBottom: 10
    },
    btnContainer: {
        width: "100%",
        marginTop: 20
    },
    btn: {
        backgroundColor: "#00a680"
    }
})
