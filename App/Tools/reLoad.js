import * as firebase from 'firebase'

export const reLoad = async (password) => {
    const user = await firebase.auth().currentUser
    const credentials = await firebase.auth.EmailAuthProvider.credential(user.email, password)
    return user.reauthenticateWithCredential(credentials)
}