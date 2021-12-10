import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EditScreen } from './screens/EditScreen';
import { MapScreen } from './screens/MapScreen';
import { CreateScreen } from './screens/CreateScreen';
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
        ? 'ios-list-outline'
        : 'ios-list';
    } else if (route.name === 'Map') {
      iconName = focused ? 'ios-navigate-circle' : 'ios-navigate-circle-outline';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#009dff',
  tabBarInactiveTintColor: 'gray',

})

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Create" component={CreateScreen} />
      <HomeStack.Screen name="HomeTab" options={{ title: "Home" }} component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Edit" component={EditScreen} />
    </HomeStack.Navigator>
  )
}

const MyStack = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeStackScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
