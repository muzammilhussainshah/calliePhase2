import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../styles/Colors';
import CalenderStack from './Stacks/CalenderStack';
import ChatStack from './Stacks/ChatStack';
import ProfileStack from './Stacks/ProfileStack';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="CalenderStack"
            screenOptions={({ route }) => ({

                activeTintColor: Colors.black,
                inactiveTintColor: 'gray',
                headerShown: false,
                // tabBarStyle: {borderWidth:1},
                // tabBarLabelStyle: {borderWidth:1,backgroundColor:"red"},


                tabBarIcon: ({ color, focused }) => {
                    let iconName;
                    switch (route.name) {
                        case 'CalenderStack':
                            iconName = 'calendar';
                            break;
                        case 'ChatStack':
                            iconName = 'chatbubble-outline';
                            break;
                        case 'ProfileStack':
                            iconName = 'user';
                            break;
                        default:
                            iconName = 'calendar';
                    }

                    // Set the color based on focused (active) state
                    const iconColor = focused ? Colors.black : 'gray';

                    // Render the icon with the determined color
                    if (route.name === 'CalenderStack') {
                        return (
                            <FontAwesome5
                                name={iconName}
                                size={RFPercentage(3)}
                                style={{ color: iconColor, fontweight: 'bold', }}
                            />
                        );
                    } else if (route.name === 'ChatStack') {
                        return (
                            <Ionicons
                                name={iconName}
                                size={RFPercentage(2.7)}
                                style={{ color: iconColor, fontweight: 'bold', }}
                            />
                        );
                    } else if (route.name === 'ProfileStack') {
                        return (
                            <SimpleLineIcons
                                name={iconName}
                                size={RFPercentage(2.7)}
                                style={{ color: iconColor, fontweight: 'bold', }}
                            />
                        );
                    }
                },
            })}
        // tabBarOptions={{
        //     style: {
        //       borderTopWidth: 1, // Set the border width for the bottom tab bar
        //       borderTopColor: 'gray', // Set the border color for the bottom tab bar
        //       backgroundColor: 'red',
        //       marginHorizontal: RFPercentage(5),
        //       height: RFPercentage(8),
        //     },
        //   }}
        >
            <Tab.Screen
                name="CalenderStack"
                component={CalenderStack}

                options={{
                    tabBarItemStyle: {
                        borderTopWidth: 1,
                    },
                    tabBarLabel: () => null, // Hide the label for this tab
                }}
            />
            <Tab.Screen
                name="ChatStack"
                component={ChatStack}
                options={{
                    tabBarItemStyle: {
                        borderTopWidth: 1,
                    },
                    tabBarLabel: () => null, // Hide the label for this tab
                }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{
                    tabBarItemStyle: {
                        borderTopWidth: 1,
                    },
                    tabBarLabel: () => null, // Hide the label for this tab
                }}
            />
        </Tab.Navigator>
    );
};
