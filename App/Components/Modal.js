import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'

const Modal = ({ isVisible, setisVisible, children }) => {

    const closeModal = () => setisVisible(false)

    return (
        <Overlay isVisible={isVisible}
            windowBackgroundColor="rgba(0, 0, 0, .5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
            onBackdropPress={closeModal}
        >
            {children}
        </Overlay>
    )
}

export default Modal

const styles = StyleSheet.create({
    overlay: {
        height: "auto",
        width: "90%",
        backgroundColor: "#fff",
    }
})
