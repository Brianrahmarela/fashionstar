import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Detail' component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
