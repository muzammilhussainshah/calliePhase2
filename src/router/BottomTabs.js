import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
// import Octicons from 'react-native-vector-icons/Octicons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Entypo from 'react-native-vector-icons/Entypo';
// import TableMapStack from '../stacks/TableMap';
// import BookingStack from '../stacks/BookingStack';
// import ChatStack from '../stacks/ChatStack';
// import LoyaltyStack from '../stacks/LoyaltyStack';
// import StaffStack from '../stacks/StaffStack';
// import RestaurentsStack from '../stacks/RestaurentsStack';
// import NewsStack from '../stacks/NewsStack';
// import ProfileStack from '../stacks/ProfileStack';
// import style from '../style';
import CalenderStack from './Stacks/CalenderStack';
import ChatStack from './Stacks/ChatStack';
import ProfileStack from './Stacks/ProfileStack';
// import NetInfo from '@react-native-community/netinfo';
// import { useDispatch, useSelector } from 'react-redux';
// import { IS_INTERNET_CONNECTED } from '../../store/constants';
// import {
// $subscribeUnreadMessagesListener,
// $unsubscribeUnreadMessagesListener
// } from '../../services/chatroom';
// import {
// unSubscribePulseListener,
// updateBadgeDisplayStatus
// } from '../../services/app';
// import { isTablet } from 'react-native-device-info';
// import theme from '../../theme/theme';

// const { tabBarLabelStyle, tabBarStyle } = style;
const Tab = createBottomTabNavigator();

export const BottomTabs = () => {


    return (
        <Tab.Navigator
            initialRouteName="CalenderStack"
            screenOptions={{
                // tabBarLabelStyle: tabBarLabelStyle,
                tabBarActiveBackgroundColor: 'rgba(0, 0, 0, 0.33)',
                tabBarInactiveTintColor: 'rgba(255, 255, 255, .33)',
                tabBarHideOnKeyboard: true,
                // tabBarActiveTintColor: theme.colors.white,
                headerShown: false,
                tabBarLabelPosition: 'below-icon',
                // tabBarStyle: tabBarStyle
            }}
        >

            <Tab.Screen
                name="CalenderStack"
                component={CalenderStack}
                options={{
                    tabBarItemStyle: {
                        borderRadius: 8,
                        marginBottom: 5
                    },
                    tabBarLabel: 'Calender',
                    // tabBarIcon: ({ color }) => (
                    //     <Feather
                    //         name="book-open"
                    //         size={20}
                    //         style={{ color: color, marginTop: 2 }}
                    //     />
                    // )
                }}
            />
            <Tab.Screen
                name="ChatStack"
                component={ChatStack}
            // options={{
            //     tabBarItemStyle: {
            //         borderRadius: 8,
            //         marginBottom: 5
            //     },
            //     tabBarLabel: 'Chats',
            //     tabBarIcon: ({ color }) => (
            //         <Ionicons
            //             name="md-chatbubble-ellipses"
            //             size={18}
            //             style={{color: color, marginTop: 2 }}
            //         />
            //     ),
            //     // tabBarBadge:
            //         // unreadMessages > 0 ? unreadMessages : undefined,
            //     tabBarBadgeStyle: {
            //         marginLeft: 2,
            //         top: -5,
            //         transform: [{ scale: 0.6 }]
            //     }
            // }}
            />

            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{
                    tabBarItemStyle: {
                        borderRadius: 8,
                        marginBottom: 5
                    },
                    tabBarLabel: 'Profile',
                    // tabBarIcon: ({ color }) => (
                    //     <FontAwesome5
                    //         name="user-circle"
                    //         size={18}
                    //         style={{ color: color, marginTop: 2 }}
                    //     />
                    // )
                }}
            />
        </Tab.Navigator>
    );
};
