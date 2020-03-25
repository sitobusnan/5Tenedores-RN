import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TopRestaurants from '../../Screens/TopRestaurants'

const TopRestaurantsStack = createStackNavigator();

const topRestaurantsStack = () => {
    return (
        <TopRestaurantsStack.Navigator initialRouteName="Restaurantes">
            <TopRestaurantsStack.Screen name="TopRestaurantes" component={TopRestaurants} />
        </TopRestaurantsStack.Navigator>
    )
}

export default topRestaurantsStack
