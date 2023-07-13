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
import { Navigate } from '../../store/action/action';
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
        console.log(currentUser,'currentUser')
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
