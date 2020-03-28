import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import * as firebase from 'firebase'

const ChangeDisplayName = ({ displayName, setisVisibleModal, setreloadData, toastRef }) => {

    const [state, setstate] = useState({
        text: "",
        error: "",
        isLoading: false
    })

    const updateDisplayName = () => {
        setstate({ ...state, error: "" })
        if (state.text.trim() === "" || state.text === displayName) setstate({ ...state, error: "Introduce un nombre NUEVO" })
        else {
            setstate({ ...state, isLoading: true })
            console.log(state.text)
            firebase.auth().currentUser.updateProfile({ displayName: state.text })
                .then(() => {
                    setstate({ ...state, isLoading: false })
                    setreloadData(true)
                    toastRef.current.show("Nombre actualizado")
                    setisVisibleModal(false)
                })
                .catch(err => {
                    console.log(err)
                    setstate({ ...state, error: "Error al actualizar", isLoading: false })

                })
        }
    }
    return (
        <View style={styles.view}>
            <Input
                placeholder={"Nombre"}
                containerStyle={styles.input}
                defaultValue={displayName && displayName}
                onChange={(e) => setstate({ ...state, text: e.nativeEvent.text })}
                rightIcon={{
                    type: "material-community",
                    name: "account-circle-outline",
                    color: "#c2c2c2"
                }}
                errorMessage={state.error}
            />
            <Button
                title="Cambiar nombre"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={updateDisplayName}
                loading={state.isLoading}
            />
        </View>
    )
}

export default ChangeDisplayName

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
