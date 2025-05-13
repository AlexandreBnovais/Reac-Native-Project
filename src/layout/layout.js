import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen/homeScreen';
import { LoginScreen } from '../screens/LoginScreen/loginScreen';

const Stack = createNativeStackNavigator();

export const Layout = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}