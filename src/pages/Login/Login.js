


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

const Login = ({ navigation }) => {

  const [email, setemail] = useState('samana.tahir@gmail.com');
  const [confirmPassword, setConfirmPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);
  const [check, setcheck] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSave = async () => {
    if (confirmPassword.length < 8) {
      setError('Password should be at least 8 characters.');
      return;
    } else {
      setError('');
      try {
        let user = await auth().signInWithEmailAndPassword(email, confirmPassword);
        if (user.user.emailVerified) Navigate(navigation, 'Home',)
        else if (user) {
          await auth().currentUser.sendEmailVerification();
          alert(`Link has been sent to ${user.user.email} please verify first before login`);
        }
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
        title="Log In"
        callBack={handleSave}
        customStyle={styles.loginPrimaryButton(false)}
        titleStyle={styles.loginPrimaryButtonText(false)}
      />
      <Text style={[styles.inputTitle, styles.forgetPass]}>{`Forgot password`}</Text>
      <Text style={[styles.description, styles.newUser]}>{`New user?`}</Text>

    </SafeAreaView>
  );
};

export default Login;

