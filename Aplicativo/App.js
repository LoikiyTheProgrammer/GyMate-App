import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes/routes';

SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    'Lexend Black': require('./src/assets/fonts/Lexend-Black.ttf'),
    'Lexend Bold': require('./src/assets/fonts/Lexend-Bold.ttf'),
    'Lexend ExtraBold': require('./src/assets/fonts/Lexend-ExtraBold.ttf'),
    'Lexend ExtraLight': require('./src/assets/fonts/Lexend-ExtraLight.ttf'),
    'Lexend Light': require('./src/assets/fonts/Lexend-Light.ttf'),
    'Lexend Medium': require('./src/assets/fonts/Lexend-Medium.ttf'),
    'Lexend Regular': require('./src/assets/fonts/Lexend-Regular.ttf'),
    'Lexend SemiBold': require('./src/assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend Thin': require('./src/assets/fonts/Lexend-Thin.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

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