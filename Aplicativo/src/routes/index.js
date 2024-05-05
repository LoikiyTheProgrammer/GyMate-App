import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/beforeLogin/Home';
import SignUp from '../screens/beforeLogin/SignUp';
import SignIn from '../screens/beforeLogin/SignIn';
import AuthScreen from '../screens/beforeLogin/Auth';
import CRUD from '../screens/beforeLogin/CRUD';
import InitialScreen from '../screens/afterLogin/InitialScreen';

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='GyMate'
        component={Home}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='GyMate Sign-in'
        component={SignIn}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='GyMate Sign-up'
        component={SignUp}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='GyMate Auth'
        component={AuthScreen}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='GyMate CRUD'
        component={CRUD}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='GyMate Initial-Screen'
        component={InitialScreen}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  )
}