import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import CRUD from '../screens/CRUD';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='GyMate'
        component={Welcome}
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
    </Stack.Navigator>
  );
}