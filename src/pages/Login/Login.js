


import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import { Navigate } from '../../store/action/action';
import { styles } from '../SetPassword/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

  const [email, setemail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [check, setcheck] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const addUserDataAsync = async (data) => {
    try {
      await AsyncStorage.setItem(
        'currentUserData',
        JSON.stringify(data),
      );
    } catch (error) {
      Alert.alert(error)
      // Error saving data
    }
  }

  const handleSave = async () => {
    if (confirmPassword.length < 8) {
      setError('Password should be at least 8 characters.');
      return;
    } else {
      setError('');
      try {
        let user = await auth().signInWithEmailAndPassword(email, confirmPassword);
        if (user?.user?.emailVerified) Navigate(navigation, 'App',)
        else if (user) {
          const data = {}
          data.confirmPassword = confirmPassword;
          data.password = confirmPassword;
          // data.isemailVerified = true,
            data.email = email
          await addUserDataAsync(data)
          await auth().currentUser.sendEmailVerification();
          Navigate(navigation, 'VerifyEmail')

          // console.log(user, 'user')
          // await addUserDataAsync(userData)
          // navigation.navigate('VerifyEmail')
          // alert(`Link has been sent to ${user.user.email} please verify first before login`);
        }
        // else{
        //   // Navigate(navigation, 'VerifyEmail',)

        // }
      } catch (error) {
        Alert.alert('Email Required', error.message, [{ text: 'OK', onPress: () => setError('') },])
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.inputTitle, styles.textAlignCenter]}>{`Welcome Back`}</Text>
      <Text style={[styles.inputTitle, styles.title]}>{`Let’s log you in to continue studying.`}</Text>

      <View style={[styles.inputContainer, styles.inputContainer2]}>
        <TextInput
          style={[styles.input, styles.inputEmail]}
          placeholder="Email"
          placeholderTextColor={Colors.gray}
          value={email}
          onChangeText={setemail}
        />

      </View>

      <View style={[styles.inputContainer, { marginLeft: RFPercentage(4) }]}>
        <TextInput
          style={[styles.input, { backgroundColor: Colors.white }]}
          placeholder="Confirm Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={[{}]} onPress={togglePasswordVisibility}>
          <Icon
            name={!showPassword ? 'eye-slash' : 'eye'}
            size={RFPercentage(3)}
            style={{ marginLeft: RFPercentage(1) }}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>

      {error ? (
        Alert.alert('Password Invalid', error, [{ text: 'OK', onPress: () => setError('') },])
      ) : null}

      <TouchableOpacity
        onPress={() => setcheck(!check)}
        activeOpacity={.8}
        style={styles.checkContainer}>
        {check ?
          <AntDesign
            name='checksquareo'
            color={Colors.white}
            size={RFPercentage(2)}
            style={{ marginHorizontal: RFPercentage(.5) }} /> :
          <Feather
            name='square'
            color={Colors.white}
            size={RFPercentage(2)}
            style={{ marginHorizontal: RFPercentage(.5) }} />
        }
        <Text style={[styles.description, { width: "auto" }]}>{`Remember me`}</Text>
      </TouchableOpacity>

      <Button
        title="LOG IN"
        callBack={handleSave}
        customStyle={styles.loginPrimaryButton(false)}
        titleStyle={styles.loginPrimaryButtonText(false)}
      />
      <TouchableOpacity activeOpacity={.8} onPress={() => Navigate(navigation, 'ForgetPassword')}>
        <Text style={[styles.inputTitle, styles.forgetPass]}>{`Forgot password`}</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={.8} onPress={() => Navigate(navigation, 'Signup')}>
        <Text style={[styles.description, styles.newUser]}>{`New user?`}</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Login;

