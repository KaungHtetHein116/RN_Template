import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigator';

const MainNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
