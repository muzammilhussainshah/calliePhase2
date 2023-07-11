import * as React from 'react';

import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth'

import Welcome from '../../pages/Welcome/Welcome';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';
import VerifyEmail from '../../pages/VerifyEmail/VerifyEmail';
import Home from '../../pages/Home/Home';
import SetPassword from '../../pages/SetPassword/SetPassword';
import { useDispatch, } from 'react-redux';
import ActionTypes from '../../store/constant/constant';
import AddProfile from '../../pages/AddProfile/AddProfile';
import AddCurrentCourse from '../../pages/AddCurrentCourse/AddCurrentCourse';

const Stack = createStackNavigator();

export const Navigation = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    const user = auth().currentUser;
    if (user) dispatch({ type: ActionTypes.CURRENTUSER, payload: user })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"AddCurrentCourse"}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="AddProfile" component={AddProfile} />
        <Stack.Screen name="AddCurrentCourse" component={AddCurrentCourse} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export const AppNavigation = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const user = auth().currentUser;
    if (user) dispatch({ type: ActionTypes.CURRENTUSER, payload: user })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}