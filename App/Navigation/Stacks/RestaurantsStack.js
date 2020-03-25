import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Restaurants from '../../Screens/Restaurants'

const RestaurantsStack = createStackNavigator();

const restaurantsStack = () => {
    return (
        <RestaurantsStack.Navigator initialRouteName="Restaurantes">
            <RestaurantsStack.Screen name="Restaurantes" component={Restaurants} />
        </RestaurantsStack.Navigator>
    )
}

export default restaurantsStack


