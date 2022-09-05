import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';
import DragScreen from './src/Screens/DragScreen/DragScreen';

const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Drag" component={DragScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app