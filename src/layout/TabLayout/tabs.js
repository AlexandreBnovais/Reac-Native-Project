import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TimeScreen } from '../../screens/TimeLineScreen/timeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='TimeLine' component={TimeScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
