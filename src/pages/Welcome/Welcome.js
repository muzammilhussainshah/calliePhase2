// @app
import React, {
  useEffect
} from 'react';
import {
  Text,
  Image,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../components/Button';
import { styles } from './styles';
import { Navigate, getCurrentUserData } from '../../store/action/action';
import { useSelector } from 'react-redux';

const Welcome = ({ navigation }) => {

  const currentUser = useSelector((state) => state.root.currentUser)

  useEffect(() => {
    const getUserDataAsync = async (data) => {
      try {
        // let currentUserDb = await getCurrentUserData();
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
          // console.log(currentUserDb?.selectedCourseSubject)
          else if (currentUser && currentUser?._user?.emailVerified == true && currentUser?._user?.photoURL == null) {
            console.log(currentUser, 'currentUserDb',)

            navigation.replace('AddProfile')
          }
          // else if (currentUser && currentUser?._user?.emailVerified == true && currentUser?._user?.photoURL?.length > 0) { navigation.replace('AddCurrentCourseSubject') }
          // else { }
        }

      } catch (error) {
        console.log(error, 'error')
        Alert.alert(error)
        //Error saving data
      }
    }
    getUserDataAsync()
  }, [currentUser])
  useEffect(() => {

    const getUserDataAsync = async (data) => {
      try {
        let currentUserDb = await getCurrentUserData();
        if (currentUserDb && currentUserDb?.isemailVerified == true && currentUserDb?.photoURL?.length > 0
        ) {
          if (typeof currentUserDb?.selectedCourseSubject == 'undefined'
            || typeof currentUserDb?.myCourses == 'undefined'
            || typeof currentUserDb?.selectedCourseSubject == 'undefined'
          ) {
            // console.log(currentUserDb, 'currentUserDb',)
            navigation.replace('AddCurrentCourseSubject')
          }
        }
         if (currentUserDb && currentUserDb?.isemailVerified == true && currentUserDb?.photoURL?.length > 0 && currentUserDb?.selectedCourse?.length > 0 && currentUserDb?.selectedCourseSubject && currentUserDb?.myCourses?.length > 0) {
          navigation.replace('Home')
          console.log(currentUserDb, 'currentUserDb',)
        }
      } catch (error) {
        console.log(error, 'error')
        Alert.alert(error)
        //Error saving data
      }
    }
    getUserDataAsync()
  }, [])

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
