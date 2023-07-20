import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../pages/Profile/Profile';

const Stack = createNativeStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

export default ProfileStack;
