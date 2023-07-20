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
import EditGraduation from '../../pages/EditGraduation/EditGraduation';
import ForgetPassword from '../../pages/ForgetPassword/ForgetPassword';
import ForgetPasswordEmailSent from '../../pages/ForgetPasswordEmailSent/ForgetPasswordEmailSent';
import AddCurrentCourseSubject from '../../pages/AddCurrentCourseSubject/AddCurrentCourseSubject';
import MyCourses from '../../pages/MyCourses/MyCourses';
import { BottomTabs } from '../BottomTabs';

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
        initialRouteName={"App"}
      >
        <RootStack.Screen name={'App'} component={BottomTabs} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        <Stack.Screen name="SetPassword" component={SetPassword} initialParams={{ comeFromForget: true }} />
        <Stack.Screen name="AddProfile" component={AddProfile} />
        <Stack.Screen name="AddCurrentCourse" component={AddCurrentCourse} />
        <Stack.Screen name="AddCurrentCourseSubject" component={AddCurrentCourseSubject} />
        <Stack.Screen name="EditGraduation" component={EditGraduation} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ForgetPasswordEmailSent" component={ForgetPasswordEmailSent} />
        <Stack.Screen name="MyCourses" component={MyCourses} />
        <Stack.Screen name="Home" component={Home} />

        {/* <Stack.Screen name="Home" component={Home} /> */}
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