import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'

import Modal from '../Modal'

import ChangeDisplayName from './Modals/ChangeDisplayName'
import ChangeEmail from './Modals/ChangeEmail'
import ChangePassword from './Modals/ChangePassword'


const AccountOptions = () => {

    const [isVisible, setisVisible] = useState(false)
    const [child, setchild] = useState(<></>)

    const menuOptions = [
        {
            title: "Cambiar Nombre y Apellidos",
            iconType: "material-community",
            iconNameLeft: "account-circle",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent(ChangeDisplayName)
        },
        {
            title: "Cambiar Email",
            iconType: "material-community",
            iconNameLeft: "at",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent(ChangeEmail)
        },
        {
            title: "Cambiar Contraseña",
            iconType: "material-community",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent(ChangePassword)
        },


    ]

    const selectedComponent = (child) => {
        setisVisible(true)
        setchild(child)
    }

    return (
        <View >
            {menuOptions.map((menu, index) => (
                <ListItem
                    key={index}
                    title={menu.title}
                    leftIcon={{
                        type: menu.iconType,
                        name: menu.iconNameLeft,
                        color: menu.iconColorLeft
                    }}
                    rightIcon={{
                        type: menu.iconType,
                        name: menu.iconNameRight,
                        color: menu.iconColorRight
                    }}
                    onPress={menu.onPress}
                    containerStyle={styles.menuItem}
                />
            ))}
            <Modal isVisible={isVisible} setisVisible={setisVisible} >
                {child}
            </Modal>
        </View>
    )
}

export default AccountOptions

const styles = StyleSheet.create({
    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: "#e3e3e3"
    }
})
