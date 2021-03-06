import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '@/screens/Landing';
import {RootStackParamList} from './Types';
import DrawerScreen from '@/screens/DrawerScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default () => {
  console.log('app nav');
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
        },
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
