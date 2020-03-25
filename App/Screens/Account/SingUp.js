import React, { useRef } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast from 'react-native-easy-toast'

import SignUpFrom from '../../Components/Acount/SignUpFrom'


const SingUp = ({ navigation }) => {
    const toastRef = useRef()

    return (
        <KeyboardAwareScrollView>
            <Image
                source={require("../../../assets/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.viewFrom}>
                <SignUpFrom toastRef={toastRef} navigation={navigation} />
            </View>
            <Toast ref={toastRef} position="center" opacity={0.8} />
        </KeyboardAwareScrollView>
    )
}

export default SingUp

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20
    },
    viewFrom: {
        marginRight: 40,
        marginLeft: 40
    }
})
