/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */



import React from 'react';
import { LogBox, StatusBar,Alert, } from 'react-native';

import auth from '@react-native-firebase/auth';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { PortalProvider } from '@gorhom/portal';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from './src/store';

import { AppNavigation, Navigation } from './src/router/Tab';


// ignore warnings

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
LogBox.ignoreAllLogs();

function App() {
  const [user, setUser] = React.useState();
  const [getUserData, setGetUserData] = React.useState();
  React.useEffect(() => {

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => { subscriber() }

  }, [])
  React.useEffect(() => {
    console.log("app.js")
        const getUserDataAsync = async (data) => {
          try {
            let data = await AsyncStorage.getItem('currentUserData');
            console.log("verifyname"+JSON.stringify(data))
            if (JSON.parse(data) !== null) setGetUserData(JSON.parse(data))
          } catch (error) {
            console.log(error, 'error')
            Alert.alert(error)
            // Error saving data
          }
        }
        
        getUserDataAsync()
      }, [])

  function onAuthStateChanged(user) {
   
  // console.log(currentUser+'APPJS')
   // alert("sign appn" + user?.emailVerified)
    setUser(user);
  }
  const currentUser = auth().currentUser;
  console.log(currentUser+'APPJS ssss')
  if (user?.emailVerified && getUserData) {
console.log("AppNavigation")


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

