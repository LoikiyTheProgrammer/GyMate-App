import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';
import { RoutineProvider } from './src/context/routineContext';

export default function App() {
  return (
    <RoutineProvider>
      <NavigationContainer>
        <StatusBar hidden/>
        <Routes/>
      </NavigationContainer>
    </RoutineProvider>
  );
}