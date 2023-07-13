


import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import { styles } from '../SetPassword/styles';
import { Navigate } from '../../store/action/action';

const ForgetPassword = ({ navigation }) => {

  const [email, setEmail] = useState('mynameismuzammilhussainshah@gmail.com');
  const [errorTitle, setErrorTitle] = useState('');
  const [error, setError] = useState('');
  const handleForget = async () => {
    setError('');
    // if (firstName.trim() === '') {
    //   setErrorTitle('Name Required');
    //   setError('Please enter your first name');
    // } else if (lastName.trim() === '') {
    //   setErrorTitle('Name Required');
    //   setError('Please enter your last name');
    if (email.trim() === '') {
      setErrorTitle('Email Required');
      setError('Please enter your email');
    }
    //  else if (!emailRegex.test(email)) {
    //   setErrorTitle('Invalid Email');
    //   setError('Email is not a valid .edu address.');
    // }
    else {
      console.log("setpasssword")
      await auth().sendPasswordResetEmail(email);
      // await reauthenticate(currentPassword);
      // await updatePassword(newPassword);

      console.log('Password updated successfully');
      // callBack={() => Navigate(navigation, 'ForgetPasswordEmailSent')}
      Navigate(navigation, 'ForgetPasswordEmailSent');
    }
  };
  return (
    <SafeAreaView style={styles.container}>

      <Text style={[styles.inputTitle, styles.textAlignCenter, styles.removemb]}>{`What’s your school email address?`}</Text>

      <View style={styles.inlineInputsContainer}>
        <TextInput
          style={[styles.inlineInput, { borderWidth: 1 }]}
          placeholder="Email"
          placeholderTextColor={Colors.gray}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Text style={[styles.inputTitle, styles.title, styles.forgetPassDescription]}>{`Callie will send you an email with a password reset link.`}</Text>
      {error !== '' && Alert.alert(errorTitle, error, [{ text: 'OK', onPress: () => setError('') },])}

      <Button
        title="RESET"
        callBack={handleForget}
        // callBack={() => Navigate(navigation, 'ForgetPasswordEmailSent')}
        customStyle={styles.loginPrimaryButton(false)}
        titleStyle={styles.loginPrimaryButtonText(false)}
      />

    </SafeAreaView>
  );
};

export default ForgetPassword;

