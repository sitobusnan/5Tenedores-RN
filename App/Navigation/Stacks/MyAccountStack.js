import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { withNavigation } from 'react-navigation'


import MyAccount from '../../Screens/Account/MyAccount'

import Login from '../../Screens/Account/Login'
import SingUp from '../../Screens/Account/SingUp';

const MyAccountStack = createStackNavigator();

const myAccountStack = ({ navigation }) => {
    return (
        <MyAccountStack.Navigator navigation={navigation}>
            <MyAccountStack.Screen name="My Account" component={MyAccount} />
            <MyAccountStack.Screen name="Login" component={Login} />
            <MyAccountStack.Screen name="SignUp" component={SingUp} />
        </MyAccountStack.Navigator>
    )
}

export default withNavigation(myAccountStack)