


import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../components/Button';
import { styles } from '../SetPassword/styles';

const ForgetPasswordEmailSent = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container, { justifyContent: "space-evenly" }]}>
      <Text style={[styles.inputTitle, styles.title, { fontWeight: 'bold', }]}>{`An email has been sent to your school email address. Please click the link in the email to reset your password.`}</Text>
      <View>
        <Image
          style={styles.logo}
          resizeMode='contain'
          source={require('../../images/Logo.png')}
        />
        <Button
          title="GOT IT"
          customStyle={styles.loginPrimaryButton(false)}
          titleStyle={styles.loginPrimaryButtonText(false)}
        />
      </View>

    </SafeAreaView>
  );
};

export default ForgetPasswordEmailSent;

