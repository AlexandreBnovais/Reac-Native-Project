import {
  Roboto_400Regular,
  Roboto_600SemiBold,
  Roboto_700Bold,
  useFonts } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { HomeScreen } from './src/components/HomeScreen/homeScreen';
import {View, Text} from 'react-native'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
