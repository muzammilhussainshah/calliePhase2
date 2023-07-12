import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import { styles } from './styles';

import { Navigate } from '../../store/action/action';

const SetPassword = ({ navigation, route }) => {
  let userInfo = route?.params;
  let comeFromForget = route?.params?.comeFromForget;
  console.log(comeFromForget, 'routerouteroute')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const togglePasswordVisibility2 = () => setShowPassword2(!showPassword2);

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
    setLoading(true)
    if (password.length < 8) {
      setError('Password should be at least 8 characters.');
      setLoading(false)
      return;
    } else if (password !== confirmPassword) {
      setError('Password don’t match so retype correct password.');
      setLoading(false)
      return;
    } else {
      setError('');
      let userData = JSON.parse(JSON.stringify(userInfo));
      userData.confirmPassword = confirmPassword
      userData.password = password
      try {
        console.log(userData, 'userData')
        const userCredential = await auth().createUserWithEmailAndPassword(userData.email, userData.password);
        await userCredential.user.sendEmailVerification();
        await addUserDataAsync(userData)
        setLoading(false)
        Navigate(navigation, 'VerifyEmail', userData)

      } catch (error) {
        console.log(error, 'errorerrorerror')
        if (error.code == 'auth/email-already-in-use') Alert.alert('Email Required', 'Email address already exists', [{ text: 'OK', onPress: () => Navigate(navigation, 'Welcome') },])
        else Alert.alert('Email Required', error.message, [{ text: 'OK', onPress: () => Navigate(navigation, 'Welcome') },])
        setLoading(false)
      }
    }
  };

  return (
    loading ?
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
      :
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>

          <Text style={[styles.inputTitle, { width: '60%' }]}>Set a {comeFromForget && 'new'} password.</Text>


          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { backgroundColor: Colors.white }]}
              placeholder="Password"
              placeholderTextColor={Colors.gray}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
              <Icon
                name={!showPassword ? 'eye-slash' : 'eye'}
                size={RFPercentage(3)}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { backgroundColor: Colors.white }]}
              placeholder="Confirm Password"
              placeholderTextColor={Colors.gray}
              secureTextEntry={!showPassword2}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility2}>
              <Icon
                name={!showPassword2 ? 'eye-slash' : 'eye'}
                size={RFPercentage(3)}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>

          {error ? (Alert.alert('Password Invalid', error, [{ text: 'OK', onPress: () => setError('') },])) : null}

          <Text style={[styles.description, { width: "60%" ,marginBottom:RFPercentage(1)}]}>{`password must be at least 8 characters.`}</Text>

          <Button
            title="Save"
            callBack={handleSave}
            customStyle={styles.loginPrimaryButton(false)}
            titleStyle={styles.loginPrimaryButtonText(false)}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
  );
};

export default SetPassword;
