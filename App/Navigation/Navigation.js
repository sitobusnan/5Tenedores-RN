import React from 'react'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import restaurantsStack from './Stacks/RestaurantsStack';
import topRestaurantsStack from './Stacks/TopRestaurantsStacks'
import searchStack from './Stacks/SearchStack'
import myAccountStack from './Stacks/MyAccountStack'


const Tab = createBottomTabNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Restaurants" backBehavior={{order: ['Restaurants', 'TopRestaurants' , 'Search' , 'MyAccount']}} 
            tabBarOptions={{inactiveTintColor: '#646464', activeTintColor: '#00a680'}} >
                <Tab.Screen name="Restaurants" component={restaurantsStack} options={{
                    tabBarLabel: 'Restaurants',
                    tabBarIcon: ({ color }) => (
                        <Icon type="material-community" name="compass-outline" color={color} size={22} />
                    ),
                }} />
                <Tab.Screen name="TopRestaurants" component={topRestaurantsStack} options={{
                    tabBarLabel: 'Top 10',
                    tabBarIcon: ({ color }) => (
                        <Icon type="material-community" name="star-outline" color={color} size={22} />
                    ),
                }} />
                <Tab.Screen name="Search" component={searchStack} options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <Icon type="material-community" name="magnify" color={color} size={22} />
                    ),
                }} />
                <Tab.Screen name="MyAccount" component={myAccountStack} options={{
                    tabBarLabel: 'MyAccount',
                    tabBarIcon: ({ color }) => (
                        <Icon type="material-community" name="home-outline" color={color} size={22} />
                    ),
                }} />


            </Tab.Navigator>
        </NavigationContainer>
    )
}











