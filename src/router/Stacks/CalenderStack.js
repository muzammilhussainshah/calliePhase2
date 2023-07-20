import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calender from '../../pages/Calender/Calender';

const Stack = createNativeStackNavigator();

function CalenderStack() {
    return (
        <Stack.Navigator
            initialRouteName="Calender"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Calender" component={Calender} />
        </Stack.Navigator>
    );
}

export default CalenderStack;
