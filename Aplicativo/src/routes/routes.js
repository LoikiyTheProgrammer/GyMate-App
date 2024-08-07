import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/beforeLogin/Home/home';
import SignIn from '../screens/beforeLogin/SignIn/signIn';
import SignUp from '../screens/beforeLogin/SignUp/signUp';
import CRUD from '../screens/beforeLogin/CRUD/crud';
import Main from '../screens/afterLogin/Main/main';
import Bot from '../screens/afterLogin/Bot/bot';
import Profile from '../screens/afterLogin/Profile/profile';

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
        name='GyMate CRUD'
        component={CRUD}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='GyMate Main'
        component={Main}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='GyMate AI-Bot'
        component={Bot}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='GyMate Profile'
        component={Profile}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
}