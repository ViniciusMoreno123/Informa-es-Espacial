
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationComponent, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocation';
import MeteorsScreen from './screens/Meteors';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
                              screenOptions={{headerShown:false}}>
     
      <Stack.Screen name = "Home" component={HomeScreen}/>
      <Stack.Screen name = "Meteors"component={MeteorsScreen}/>
    <Stack.Screen name = "IssLocation" component={IssLocationScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
