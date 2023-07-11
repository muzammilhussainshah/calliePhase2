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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({ navigation }) => {

  const currentUser = useSelector((state) => state.root.currentUser)

  useEffect(() => {
    console.log("welcomescreen"+currentUser)
    const getUserDataAsync = async (data) => {
      try {
        let data = await AsyncStorage.getItem('currentUserData');
        console.log("welcome"+JSON.stringify(data))
        if (JSON.parse(data) !== null) if (currentUser && currentUser?._user?.emailVerified == false) navigation.replace('VerifyEmail')
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
     

    </SafeAreaView >
  );
};
export default Welcome;
