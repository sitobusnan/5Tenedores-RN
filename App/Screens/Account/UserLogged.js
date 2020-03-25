import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import * as firebase from 'firebase'



const UserLogged = () => {
    return (
        <View>
            <Text>User Logged</Text>
            <Button
                title="LogOut"
                containerStyle={styles.btnContainerSignUp}
                buttonStyle={styles.btnSigUp}
                onPress={() => firebase.auth().signOut()}
            />

        </View>
    )
}

export default UserLogged

const styles = StyleSheet.create({
    btnContainerSignUp: {
        marginTop: 20,
        width: ' 95%'
    },
    btnSigUp: {
        backgroundColor: '#00a680'
    }

})
