import React, { useRef } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast from 'react-native-easy-toast'

import LoginForm from '../../Components/Acount/LoginForm'


const Login = ({ navigation }) => {
    const toastRef = useRef()

    return (
        <KeyboardAwareScrollView>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
            <View style={styles.viewContainer}>
                <LoginForm navigation={navigation} toastRef={toastRef} />
                <CreateAccount navigation={navigation} />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.viewContainer}>
                <Text>Login Social</Text>
            </View>
            <Toast ref={toastRef} position="center" opacity={0.8} />
        </KeyboardAwareScrollView>
    )
}

const CreateAccount = ({ navigation }) => {
    return (
        <Text style={styles.textRegister}> Aún no tienes una cuenta?
            <Text style={styles.btnRegister}
                onPress={() => navigation.navigate("SignUp")}
            > SignUp </Text>
        </Text>
    )
}

export default Login

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40
    },
    textRegister: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 15
    },
    btnRegister: {
        color: "#00a680",
        fontWeight: "bold"
    },
    divider: {
        backgroundColor: "#00a680",
        margin: 40
    }
})
