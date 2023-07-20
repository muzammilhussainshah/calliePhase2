import React, { useState } from 'react';
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

const Calender = ({ navigation }) => {
  const [date, setDate] = useState(new Date()); // Date state
  const [showDatePicker, setShowDatePicker] = useState(false); // State to control the visibility of the date picker

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

  return (
    <SafeAreaView style={styles.container}>
      {showDatePicker && (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setShowDatePicker(false)}
          style={{
            position: 'absolute',
            zIndex: 2,
            backgroundColor: 'rgba(0, 0, 0, .5)',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <View style={{ backgroundColor: Colors.white, width: '90%', alignSelf: 'center', overflow: "hidden", borderRadius: RFPercentage(2) }}>
            <View style={{ height: RFPercentage(4), justifyContent: "center", alignItems: 'flex-end', paddingHorizontal: RFPercentage(2) }} >

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
                titleStyle={styles.loginPrimaryButtonText(false)}
              />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Calender;
