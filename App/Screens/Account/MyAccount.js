import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from 'firebase'

import Loading from '../../Components/Loading'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

const MyAccount = ({ navigation }) => {
    const [login, setLogin] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            !user ? setLogin(false) : setLogin(true);
        })
    }, [])



    if (login === null) {
        return (
            <Loading isVisible={true} text="Cargando"></Loading>
        )
    }

    return login ? <UserLogged /> : <UserGuest navigation={navigation} />
}

export default MyAccount

const styles = StyleSheet.create({})
