import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import * as firebase from 'firebase'

import InfoUser from '../../Components/Acount/InfoUser'
import Toast from 'react-native-easy-toast'
import Loading from '../../Components/Loading'
import AccountOptions from '../../Components/Acount/AccountOptions'




const UserLogged = () => {
    const [userInfo, setUserInfo] = useState({})
    const [reloadData, setreloadData] = useState(false)
    const [isVisible, setisVisible] = useState(false)
    const [textLoading, settextLoading] = useState("")
    const toastRef = useRef()

    useEffect(() => {
        (async () => {
            const user = await firebase.auth().currentUser
            setUserInfo(user.providerData[0])
        })();
        setreloadData(false)
    }, [reloadData])
    return (
        <View style={styles.viewUserInfo}>
            <InfoUser userInfo={userInfo} setreloadData={setreloadData} settextLoading={settextLoading} setisVisible={setisVisible} />
            <AccountOptions userInfo={userInfo} setreloadData={setreloadData} toastRef={toastRef} />
            <Button
                title="LogOut"
                titleStyle={styles.btnLogOutText}
                buttonStyle={styles.btnLogOut}
                onPress={() => firebase.auth().signOut()}
            />
            <Toast ref={toastRef} position="center" opacity={0.5} />
            <Loading text={textLoading} isVisible={isVisible} />
        </View>
    )
}

export default UserLogged

const styles = StyleSheet.create({
    viewUserInfo: {
        minHeight: "100%",
        backgroundColor: "#f2f2f2"
    },
    btnLogOutText: {
        color: "#00a680"
    },
    btnLogOut: {
        marginTop: 20,
        borderRadius: 0,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#e3e3e3",
        borderBottomWidth: 1,
        borderBottomColor: "#e3e3e3",
        paddingTop: 10,
        paddingBottom: 10
    },

})
