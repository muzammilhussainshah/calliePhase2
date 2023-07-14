import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import Colors from '../../styles/Colors';
import { styles } from './styles';
import { CourseCart } from './Component';
import { getCourseSubjectList } from '../../store/action/action';
import Loader from '../../components/Loader';


const AddCurrentCourseSubject = ({ navigation }) => {


  const [courseSubjects, setcourseSubjects] = useState([])

  const loader = useSelector((state) => state.root.loader)
  const courseSubject = useSelector((state) => state.root.courseSubject)

  const dispatch = useDispatch()

  useEffect(() => {
    if (courseSubject.length > 0) setcourseSubjects(courseSubject)
  }, [courseSubject])

  useEffect(() => {
    dispatch(getCourseSubjectList())
  }, [])

  const searchUser = (e) => {
    let keywords = e.split(' ');
    // setsearch(keywords);
    if (keywords[0] === '') {
      setcourseSubjects(courseSubject);
    }
    if (keywords[0] !== '') {
      let searchPattern = new RegExp(
        keywords.map((term) => `(?=.*${term})`).join(''),
        'i'
      );
      let filterChat = [];
      for (let index = 0; index < courseSubject?.length; index++) {
        filterChat = courseSubject?.filter((data) => {
          return data[`Subject Code`].match(searchPattern);
        });
      }
      // let obj = {};
      // obj.day = bookingData.day;
      // obj.data = filterChat;
      // console.log(filterChat, ' filterChat')
      // obj.customerCards = bookingData.customerCards;
      setcourseSubjects(filterChat);
    }
  };
  const navigateBack = () => { navigation.goBack(); };




  return (
    <SafeAreaView style={[styles.container,]}>

      <TouchableOpacity onPress={navigateBack} style={styles.backButtonContainer}>
        <AntDesign name="arrowleft" color={Colors.white} size={RFPercentage(3)} />
      </TouchableOpacity>

      <Text style={styles.inputTitle}>{`Add your courses`}</Text>
      <Text style={styles.description}>{`Add all the courses you are currently taking to help us connect you with others in your classes.`}</Text>

      <View style={styles.searchContainer}>
        <Text style={[styles.description, { width: 'auto' }]}>{`Search courses`}</Text>
        <TextInput
          // _getText={(text: string) => searchUser(text)}
          onChangeText={(text) => searchUser(text)}
          style={styles.inlineInput}
          placeholder="Course Name"
          placeholderTextColor={Colors.gray}
        />
      </View>

      <Text style={[styles.inputTitleMyCourse,]}>{`Select Subjects`}</Text>
      {loader ?
        <Loader color={Colors.white} />
        :
        <>
          <FlatList
            data={courseSubjects}
            renderItem={({ item }) => <CourseCart item={item} navigation={navigation} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      }
    </SafeAreaView>
  );
};

export default AddCurrentCourseSubject;
