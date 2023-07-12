


import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import { styles } from '../SetPassword/styles';

const ForgetPassword = ({ navigation }) => {

  const [email, setEmail] = useState('samana.tahir@gmail.com');

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

      <Button
        title="RESET"
        customStyle={styles.loginPrimaryButton(false)}
        titleStyle={styles.loginPrimaryButtonText(false)}
      />

    </SafeAreaView>
  );
};

export default ForgetPassword;

