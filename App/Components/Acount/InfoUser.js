import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import * as firebase from 'firebase'
import * as permissions from 'expo-permissions'
import * as imagePicker from 'expo-image-picker'



const InfoUser = ({ userInfo, setreloadData, toastRef, settextLoading, setisVisible }) => {
    const changeAvatar = async () => {
        const resultPermisions = await permissions.askAsync(permissions.CAMERA_ROLL)
        const resultPermisionCammera = resultPermisions.permissions.cameraRoll.stauts
        if (resultPermisionCammera === "denied") toastRef.current.show("Se necesitan permisos de galería")
        else {
            const result = await imagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3]
            })
            if (result.cancelled) {
                toastRef.current.show("Operacion Cancelada")
            } else {
                uploadImage(result.uri, userInfo.uid)
                    .then(() => updatePhotoUrl(userInfo.uid))
                    .catch(err => console.log(err))
            }
        }
    }

    const uploadImage = async (uri, name) => {
        settextLoading("Actualizanco avatar")
        setisVisible(true)
        const response = await fetch(uri)
        const blob = await response.blob()
        const ref = firebase.storage().ref().child(`avatar/${name}`)
        return ref.put(blob)
    }

    const updatePhotoUrl = uid => {
        firebase.storage().ref(`avatar/${uid}`).getDownloadURL()
            .then((url) => {
                return firebase.auth().currentUser.updateProfile({ photoURL: url })
            })
            .then(() => {
                setisVisible(false)
                setreloadData(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.viewUserInfo}>
            <Avatar containerStyle={styles.userInfoAvatar} rounded size="large"
                showEditButton onEditPress={changeAvatar}
                source={{ uri: userInfo.photoURL ? userInfo.photoURL : "https://api.adorable.io/avatars/246/abott@adorable.png" }}
            />
            <View>
                <Text style={styles.displayName}>{userInfo.displayName ? userInfo.displayName : "Anonimus"}</Text>
                <Text style={styles.displayName}>{userInfo.email ? userInfo.email : "Social Login"}</Text>

            </View>
        </View>
    )
}

export default InfoUser

const styles = StyleSheet.create({
    viewUserInfo: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f2f2f2",
        paddingTop: 30,
        paddingBottom: 30
    },
    userInfoAvatar: {
        marginRight: 20
    },
    displayName: {
        fontWeight: "bold",

    }
})
