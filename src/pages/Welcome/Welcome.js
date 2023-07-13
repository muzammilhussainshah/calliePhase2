// @app
import React, { useEffect } from 'react';
import {
  Text,
  Image,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../components/Button';
import { styles } from './styles';
import { Navigate } from '../../store/action/action';
import { useSelector } from 'react-redux';

const Welcome = ({ navigation }) => {

  const currentUser = useSelector((state) => state.root.currentUser)

  useEffect(() => {
    // console.log("welcomescreen" + currentUser)
    const getUserDataAsync = async (data) => {
      try {
        // let data = await AsyncStorage.getItem('currentUserData');
        // let currentUserDb = await getCurrentUserData();
        // console.log(currentUserDb, 'data2data2data2data2')
        // console.log(currentUser, "welcome" + JSON.stringify(data))
        // console.log(currentUser , currentUser?._user?.emailVerified == false ,'asadsda', typeof currentUser?._user?.photoURL ,currentUser?._user?.photoURL==null )
        // console.log(currentUser, currentUser?._user?.emailVerified == false, currentUser?._user?.photoURL == null, 'asddas', JSON.parse(data))
        // if (currentUserDb) {
        //   if (currentUserDb.isemailVerified == false) {

        //     navigation.replace('VerifyEmail')
        //   }
        //   else if (currentUserDb.isemailVerified == true && currentUserDb?.photoURL == undefined) {
        //     navigation.replace('AddProfile')
        //     // console.log(currentUser, 'currentUseraa')
        //   }
        // }
        // else
        if (currentUser) {
          if (currentUser && currentUser?._user?.emailVerified == false) { navigation.replace('VerifyEmail') }
          else if (currentUser && currentUser?._user?.emailVerified == true && currentUser?._user?.photoURL == null) { navigation.replace('AddProfile') }
          else { }
        }

      } catch (error) {
        console.log(error, 'error')
        Alert.alert(error)
        //Error saving data
      }
    }
    getUserDataAsync()
  }, [currentUser])

  return (

    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode='contain'
        source={require('../../images/Logo.png')}
      />
      <Text style={[
        styles.title,
        styles.shadow
      ]}>
        Callie
      </Text>

      <Button
        title={`GET STARTED`}
        callBack={() => Navigate(navigation, 'Signup')}
        customStyle={styles.loginPrimaryButton(true)}
        titleStyle={styles.loginPrimaryButtonText(true)} />
      <Button
        title={`SIGN IN`}
        callBack={() => Navigate(navigation, 'Login')}
        customStyle={styles.loginPrimaryButton(false)}
        titleStyle={styles.loginPrimaryButtonText(false)} />

    </SafeAreaView >
  );
};
export default Welcome;
