import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/beforeLogin/Home/home';
import SignUp from '../screens/beforeLogin/SignUp/signUp';
import SignIn from '../screens/beforeLogin/SignIn/signIn';
import AuthScreen from '../screens/beforeLogin/Auth/auth';
import CRUD from '../screens/beforeLogin/CRUD/crud';
import Main from '../screens/afterLogin/Main/main';
import AI from '../screens/afterLogin/Bot/bot';

const Stack = createNativeStackNavigator();

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
        component={Main}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='GyMate AI-Bot'
        component={AI}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
}