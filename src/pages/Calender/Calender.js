import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles';
import Colors from '../../styles/Colors';
import Button from '../../components/Button';
import { getCurrentUserData } from '../../store/action/action';

const Calender = ({ navigation }) => {
  const [date, setDate] = useState(new Date()); // Date state
  const [showDatePicker, setShowDatePicker] = useState(false); // State to control the visibility of the date picker
  const [currentUser, setCurrentUser] = useState([]); // State to control the visibility of the date picker

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false); // Hide the date picker for iOS immediately after selecting a date
    setDate(currentDate); // Update the date state
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handlePreviousDate = () => {
    const previousDate = new Date(date);
    previousDate.setDate(date.getDate() - 1);
    setDate(previousDate);
    // showDatepicker(); // Show the date picker after changing the date
  };

  const handleNextDate = () => {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    setDate(nextDate);
    // showDatepicker(); // Show the date picker after changing the date
  };



  useEffect(() => {
    const getUserDataFromDb = async () => {
      let currentUserDb = await getCurrentUserData();
      console.log(currentUserDb, 'currentUserDb')
      if (currentUserDb) setCurrentUser(currentUserDb)
    }
    getUserDataFromDb()

  }, [])
  return (
    <SafeAreaView style={styles.container}>
      {showDatePicker && (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setShowDatePicker(false)}
          style={styles.calenderModalContainer}
        >
          <View style={styles.calenderModal}>
            <View style={styles.calenderCrossConatianer} >
              <AntDesign name='close' size={RFPercentage(2)} />
            </View>
            <DateTimePicker
              display={showDatePicker}
              value={date}
              mode='date'
              locale="en"
              onChange={handleDateChange} // Handle date change when using the date picker
            />
          </View>
        </TouchableOpacity>
      )}

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>MICHIGAN</Text>
        <AntDesign name={`setting`} size={RFPercentage(4)} />
      </View>
      <View style={styles.calenderContainer}>
        <TouchableOpacity onPress={handlePreviousDate}>
          <AntDesign name='left' size={RFPercentage(2)} />
        </TouchableOpacity>
        <Text onPress={showDatepicker} style={styles.chatWithYourMates}>{moment(date).format('dddd, MMMM DD, YYYY')}</Text>
        <TouchableOpacity onPress={handleNextDate}>
          <AntDesign name='right' size={RFPercentage(2)} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.chatWithYourMates}>Chat with your classmates</Text>
      </View>
      <FlatList
        data={currentUser?.selectedCourse}
        renderItem={({ item }) => {
          let newText = item.text.split(' - ')[0];
          let newSectionText = item.section.match(/\d+/)[0];

          return (
            <View style={styles.myCourseContainer}>
              <View style={styles.CourseNameAndTimeContainer}>
                <Text style={styles.CourseName}>{newText} ({newSectionText})</Text>
                <Text style={styles.CourseTime}>{item.time}</Text>
              </View>
              <View style={styles.chatBtnContainer}>
                <Button
                  title={`Chat`}
                  customStyle={styles.loginPrimaryButton(false)}
                  titleStyle={styles.loginPrimaryButtonText(false)}
                />
              </View>
            </View>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Calender;
