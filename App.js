/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({navigation}) {
  const intro = "By monitoring your activity we can tell you if you were in the same places with a Covid-19 diagnosed person  ";
  return (
    <View style={{backgroundColor: '#FF8A8A', height: 30}}>
      <Text> Start recording your activity </Text>
    <Text>{intro} </Text>
    </View>
  );
}
function MainScreen({navigation}) {
  return (
    <Text> Main </Text>
  );
}
function TBD({navigation}) {
  return (
    <Text>'Work in progress...' </Text>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Under construction" component={TBD}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}