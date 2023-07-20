import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../../pages/Chat/Chat';

const Stack = createNativeStackNavigator();

function ChatStack() {
    return (
        <Stack.Navigator
            initialRouteName="Chat"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    );
}

export default ChatStack;
