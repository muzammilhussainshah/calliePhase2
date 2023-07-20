// @app
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text, View,
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from './styles';
import Button from '../../components/Button';

const Calender = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>MICHIGAN</Text>
        <AntDesign name={`setting`} size={RFPercentage(4)} />
      </View>
      <View style={styles.calenderContainer}>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.chatWithYourMates}>Chat with your classmates</Text>
      </View>
      <FlatList
        data={[0, 0, 0]}
        renderItem={({ item }) => (
          <View style={styles.myCourseContainer}>

            <View style={styles.CourseNameAndTimeContainer}>
              <Text style={styles.CourseName}>ECON 101</Text>
              <Text style={styles.CourseTime}>8:25 - 9:55 AM</Text>
            </View>
            <View style={styles.chatBtnContainer}>
              <Button
                title={`Chat`}
                customStyle={styles.loginPrimaryButton(false)}
                titleStyle={styles.loginPrimaryButtonText(false)} />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView >
  );
};
export default Calender;
