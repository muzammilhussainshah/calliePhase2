import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { firebase } from '@react-native-firebase/auth';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Button from '../../components/Button';
import { styles } from './styles';
import { getCurrentUserData } from '../../store/action/action';

const Calender = ({ navigation }) => {

  const [date, setDate] = useState(new Date()); // Date state
  const [currentUser, setCurrentUser] = useState([]); // State to control the visibility of the date picker

  const handlePreviousDate = () => {
    const previousDate = new Date(date);
    previousDate.setDate(date.getDate() - 1);
    setDate(previousDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    setDate(nextDate);
  };

  const isCurrentDate = moment(date).isSame(moment(), 'day');

  useEffect(() => {
    const getUserDataFromDb = async () => {
      let currentUserDb = await getCurrentUserData();
      if (currentUserDb) setCurrentUser(currentUserDb)
    }
    getUserDataFromDb()

  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>MICHIGAN</Text>
        <AntDesign
          // onPress={() => { firebase.auth().signOut() }}
          name={`setting`} size={RFPercentage(4)} />
      </View>
      <View style={styles.calenderContainer}>
        <TouchableOpacity onPress={handlePreviousDate} disabled={isCurrentDate}>
          <AntDesign name='left' size={RFPercentage(2)} />
        </TouchableOpacity>
        <Text
          style={styles.chatWithYourMates}>{moment(date).format('dddd, MMMM DD, YYYY')}</Text>
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
