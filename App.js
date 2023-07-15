/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */



import React from 'react';
import { LogBox, StatusBar, Alert, } from 'react-native';

import auth from '@react-native-firebase/auth';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { PortalProvider } from '@gorhom/portal';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from './src/store';

import { AppNavigation, Navigation } from './src/router/Tab';
import { getCurrentUserData } from './src/store/action/action';


// ignore warnings

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
LogBox.ignoreAllLogs();

function App() {
  const [user, setUser] = React.useState();
  const [currentUser, setCurrentUser] = React.useState();
  const [getUserData, setGetUserData] = React.useState();
  React.useEffect(() => {

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => { subscriber() }

  }, [])
  React.useEffect(async () => {
    const getUserDataAsync = async (data) => {
      try {
        let data = await AsyncStorage.getItem('currentUserData');
        if (JSON.parse(data) !== null) setGetUserData(JSON.parse(data))
      } catch (error) {
        Alert.alert(error)
        // Error saving data
      }
    }

    const getUserDataFromDb = async () => {
      let currentUserDb = await getCurrentUserData();
      if (currentUserDb) setCurrentUser(currentUserDb)
    }
    getUserDataFromDb()
    getUserDataAsync()
  }, [])

  function onAuthStateChanged(user) {

    setUser(user);
  }
  if (currentUser?.isemailVerified !== true && currentUser?.photoURL?.length > 0) {
    console.log(user, "AppNavigation", getUserData)
    return (
      <Provider store={store}>
        <StatusBar
          hidden={true}
        />
        <SafeAreaProvider>
          <PortalProvider>
            <AppNavigation />
          </PortalProvider>
        </SafeAreaProvider>
      </Provider>
    )
  } else {
    console.log("Navigation")
    return (
      <Provider store={store}>
        <StatusBar
          hidden={true}
        />
        <SafeAreaProvider>
          <PortalProvider>
            <Navigation />
          </PortalProvider>
        </SafeAreaProvider>
      </Provider>
    );

  }
}

export default App;

