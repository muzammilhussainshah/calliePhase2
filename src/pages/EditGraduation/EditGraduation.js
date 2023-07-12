import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';

import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import { styles } from './styles';
import { countries } from './dummyData';

const EditGraduation = ({ navigation }) => {

  const handleMajorSelection = (selectedItem, index) => { console.log(selectedItem, index); };

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
        <SelectDropdown
          data={countries}
          onSelect={handleMajorSelection}
          defaultButtonText="Select major"
          buttonTextAfterSelection={(selectedItem, index) => selectedItem}
          rowTextForSelection={(item, index) => item}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          renderDropdownIcon={isOpened => (
            <AntDesign name={isOpened ? 'up' : 'down'} color={Colors.gray} size={18} />
          )}
          dropdownIconPosition="right"
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />

        <View style={styles.whatIsMajorContainer}>
          <Image source={require('../../images/graduation.png')} />
          <Text style={styles.inputTitle}>When do you plan to graduate?</Text>
        </View>
        <SelectDropdown
          data={countries}
          onSelect={handleMajorSelection}
          defaultButtonText="Select graduation year"
          buttonTextAfterSelection={(selectedItem, index) => selectedItem}
          rowTextForSelection={(item, index) => item}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          renderDropdownIcon={isOpened => (
            <AntDesign name={isOpened ? 'up' : 'down'} color={Colors.gray} size={18} />
          )}
          dropdownIconPosition="right"
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
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
