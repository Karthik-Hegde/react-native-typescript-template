import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamList, StackScreenName} from './types';
import {Home} from '../screens';

const Stack = createStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={StackScreenName.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
