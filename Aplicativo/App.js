import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';
import { RoutineProvider } from './src/context/routineContext.js';

export default function App() {
  return (
    <RoutineProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
        <Routes/>
      </NavigationContainer>
    </RoutineProvider>
  );
}