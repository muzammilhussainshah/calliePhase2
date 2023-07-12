import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';

import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import { styles } from './styles';
import { countries } from './dummyData';
import { DropDown } from './Component';

const EditGraduation = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.inputTitle}>SKIP</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.whatIsMajorContainer}>
          <Image source={require('../../images/certificate.png')} />
          <Text style={styles.inputTitle}>What’s your major?</Text>
        </View>

        <DropDown countries={countries} />

        <View style={styles.whatIsMajorContainer}>
          <Image source={require('../../images/graduation.png')} />
          <Text style={styles.inputTitle}>When do you plan to graduate?</Text>
        </View>

        <DropDown countries={countries} />
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
