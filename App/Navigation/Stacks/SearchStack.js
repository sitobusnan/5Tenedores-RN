import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../../Screens/Search'

const SearchStack = createStackNavigator();

const searchStack = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={Search} />
        </SearchStack.Navigator>
    )
}

export default searchStack