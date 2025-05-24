import React from 'react'
import { View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TimeScreen } from '../../screens/TimeLineScreen/timeScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  )
}

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  )
}


const FavoriteScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorite Screen</Text>
    </View>
  )
}

export function Tabs () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 20,
            backgroundColor: '#333',
            marginHorizontal: 20,
            borderRadius: 30,
            height: 60,
            ...styles.shadow
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'TimeLine') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'favorite' : 'favorite';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'menu' : 'menu';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: 'gray',
        }
      }}
      initialRouteName='TimeLine' 
    >
        <Tab.Screen 
          name='TimeLine' 
          component={TimeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold'},
          }} 
        />

        <Tab.Screen 
          name='Search' 
          component={SearchScreen}
          options={{
            tabBarLabel: 'Seach',
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold'},
          }} 
        />

        <Tab.Screen 
          name='Favorite' 
          component={FavoriteScreen}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold'},
          }} 
        />

        <Tab.Screen 
          name='Settings' 
          component={SettingsScreen}
          options={{
            tabBarLabel: 'menu',
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold'},
          }} 
        />
    </Tab.Navigator>
    
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5D70',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});