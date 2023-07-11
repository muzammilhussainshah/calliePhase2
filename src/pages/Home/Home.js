// @app
import React, { useEffect,useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import { ActivityIndicator } from "react-native";
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import ActionTypes from '../../store/constant/constant';
import firestore from '@react-native-firebase/firestore';
import { onShare } from '../../store/action/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const db = firestore();

const Home = ({ navigation }) => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState();
  const [getUserData, setGetUserData] = useState();

  useEffect(() => {
    console.log("home")

    const getUserDataAsync = async (data) => {
      try {
        let data = await AsyncStorage.getItem('currentUserData');
        if (JSON.parse(data) !== null) setGetUserData(JSON.parse(data))
        else await SignOut()
      } catch (error) {
        console.log(error, 'error')
         Alert.alert(error)
        // Error saving data
      }
    }

    getUserDataAsync()
  }, [])
  const shareMsg = getUserData?.firstName+ " " + getUserData?.lastName + " is inviting you to join them on Callie - the social learning platform for college students” "

//  useEffect(() => {
//    // verifiedUserSaveInDb()
//  }, [])

const SignOut = async () => {
  try {
   dispatch({ type: ActionTypes.CURRENTUSER, payload: [] })
   await AsyncStorage.removeItem("currentUserData");
  await auth().signOut()
  console.log("signout done")
  navigation.navigate('Welcome')
} catch (error) {
  //Alert.alert(error)
  console.log("eroor"+error.message)
  navigation.navigate('Welcome')
  // Error saving data
}
}

  function verifiedUserSaveInDb() {
    const currentUser = auth().currentUser;
    const userId = currentUser.uid
    const email = currentUser.email

    const data = {
      email: email,
      isVerified: true,
    };

    if (userId) {
      // Check if the document already exists
      db.collection('users')
        .doc(userId)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            // Document already exists, do not add new data
            console.log('Document already exists.');
          } else {
            // Document doesn't exist, add new data


            db.collection('users')
              .doc(userId)
              .set(data)
              .then(() => {
                console.log('Document added successfully.');
              })
              .catch((error) => {
                console.error('Error adding document: ', error);
              });
          }
        })
        .catch((error) => {
          console.error('Error getting document: ', error);
        });
    } else {
      console.error('User is not authenticated.');
    }

  }




  return (
    loading ?
    <View style={styles.container}>
    <ActivityIndicator size="large" color="#fff" />
    </View>
      :
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
       <Image
          style={styles.logo}
          source={require('../../images/Logo.png')}
        />
        <Text style={[styles.headerText, styles.shadow]}>allie</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
        <View>

          <Text style={styles.inputTitle}>Your spot is reserved!</Text>

          <Text style={styles.description}>We’ll launch at schools with the most signups, so tell your friends about us and we’ll notify you when we’re ready!</Text>
        </View>
        <Button
          title={`INVITE YOUR FRIENDS`}
          callBack={async () => {
            setLoading(true)
             onShare(shareMsg)
             dispatch({ type: ActionTypes.CURRENTUSER, payload: [] })
             setLoading(false)
          ///await auth().signOut()
            // navigation.navigate('Welcome')
          }
          }
          customStyle={styles.loginPrimaryButton(true)}
          titleStyle={styles.loginPrimaryButtonText(true)} />
      </View>

    </SafeAreaView >
  );
};
export default Home;
