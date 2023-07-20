import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Navigate } from '../../store/action/action';
import { styles } from './styles';

const Signup = ({ navigation }) => {

  const [firstName, setFirstName] = useState('muzammil');
  const [lastName, setLastName] = useState('hussain');
  const [email, setEmail] = useState('mynameismuzammilhussainshah@gmail.com');
  const [error, setError] = useState('');
  const [errorTitle, setErrorTitle] = useState('');

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(edu)$/i;

  const handleSignup = () => {
    setError('');
    if (firstName.trim() === '') {
      setErrorTitle('Name Required');
      setError('Please enter your first name');
    } else if (lastName.trim() === '') {
      setErrorTitle('Name Required');
      setError('Please enter your last name');
    } else if (email.trim() === '') {
      setErrorTitle('Email Required');
      setError('Please enter your email');
    }
    //  else if (!emailRegex.test(email)) {
    //   setErrorTitle('Invalid Email');
    //   setError('Email is not a valid .edu address.');
    // }
     else {
      Navigate(navigation, 'SetPassword', { email, firstName, lastName });
    }
  };


  return (
    <SafeAreaView style={[styles.container, { paddingHorizontal: 0 }]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <TouchableOpacity onPress={() => Navigate(navigation, 'pop')} style={styles.backButtonContainer}>
          <AntDesign name={'arrowleft'} color={Colors.white} size={RFPercentage(3)} />
        </TouchableOpacity>

        <Text style={styles.inputTitle}>What’s your name?</Text>

        <View style={styles.inlineInputsContainer}>
          <TextInput
            style={styles.inlineInput}
            placeholder="First Name"
            placeholderTextColor={Colors.gray}
            value={firstName}
            onChangeText={setFirstName}
          />

          <TextInput
            style={styles.inlineInput}
            placeholder="Last Name"
            placeholderTextColor={Colors.gray}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <Text style={[styles.inputTitle, { marginTop: RFPercentage(10) }]}>What’s your school email address?</Text>

        <View style={styles.inlineInputsContainer}>
          <TextInput
            style={styles.inlineInput}
            placeholder="Email"
            placeholderTextColor={Colors.gray}
            value={email}
            onChangeText={setEmail}
          />

        </View>
        {error !== '' && Alert.alert(errorTitle, error, [{ text: 'OK', onPress: () => setError('') },])}

        <Text style={styles.description}>Callie will send you an email with a link to verify your account.</Text>

          <AntDesign
            name="rightcircle"
            size={RFPercentage(6)}
            style={{ alignSelf: 'center', marginVertical: RFPercentage(10) }}
            color={Colors.white}
            onPress={handleSignup}
          />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;
