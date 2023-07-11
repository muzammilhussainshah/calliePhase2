import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Image
} from 'react-native';

import { styles } from './styles';
import Button from '../../components/Button';
import { DropDown } from './Component';
import { RFPercentage } from 'react-native-responsive-fontsize';


const EditGraduation = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.inputTitle}>{`SKIP`}</Text>
      <View style={styles.whatIsMajorContainer}>
        <Image source={require('../../images/certificate.png')}></Image>
        <Text style={styles.inputTitle}>{`What’s your major?`}</Text>
      </View>
      <View style={{ height: RFPercentage(5), width: '60%', alignSelf: 'center' }}>

        <DropDown />
      </View>
      <View style={styles.whatIsMajorContainer}>
        <Image source={require('../../images/graduation.png')}></Image>
        <Text style={styles.inputTitle}>{`When do you plan to graduate?`}</Text>
      </View>
      <Button
        title="SAVE"
        customStyle={styles.loginPrimaryButton(false)}
        titleStyle={styles.loginPrimaryButtonText(false)}
      />
    </SafeAreaView>
  );
};

export default EditGraduation;
