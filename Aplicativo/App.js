import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle='dark-content'
        backgroundColor='transparent'
      />
      <Routes/>
    </NavigationContainer>
  );
}