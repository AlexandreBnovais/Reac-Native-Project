import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens/HomeScreen/homeScreen';
import { LoginScreen } from '../../screens/LoginScreen/loginScreen';
import { singUpScreen } from '../../screens/SingUpScreen/singUpScreen';
import { TimeScreen } from '../../screens/TimeLineScreen/timeScreen';
import { Tabs } from '../TabLayout/tabs';

const Stack = createNativeStackNavigator();

export const Layout = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='singUp' component={singUpScreen} />
            <Stack.Screen name='Tab' component={Tabs} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}