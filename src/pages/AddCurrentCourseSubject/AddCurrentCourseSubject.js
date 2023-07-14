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

import { styles } from './styles';
import { CARTDATA } from './dummyData';
import { CourseCart } from './Component';
import Colors from '../../styles/Colors';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseSubjectList } from '../../store/action/action';


const AddCurrentCourseSubject = ({ navigation }) => {


  const [courseSubjects, setcourseSubjects] = useState([])

  const courseSubject = useSelector((state) => state.root.courseSubject)

  const dispatch = useDispatch()

  const navigateBack = () => { navigation.goBack(); };

  useEffect(() => {
    if (courseSubject.length > 0) setcourseSubjects(courseSubject)
  }, [courseSubject])
  useEffect(() => {
    dispatch(getCourseSubjectList())
  }, [])
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity onPress={navigateBack} style={styles.backButtonContainer}>
        <AntDesign name="arrowleft" color={Colors.white} size={RFPercentage(3)} />
      </TouchableOpacity>

      <Text style={styles.inputTitle}>{`Add your courses`}</Text>
      <Text style={styles.description}>{`Add all the courses you are currently taking to help us connect you with others in your classes.`}</Text>

      <View style={styles.searchContainer}>
        <Text style={[styles.description, { width: 'auto' }]}>{`Search courses`}</Text>
        <TextInput
          style={styles.inlineInput}
          placeholder="Course Name"
          placeholderTextColor={Colors.gray}
        />
      </View>

      <Text style={[styles.inputTitleMyCourse,]}>{`Select Subjects`}</Text>

      <FlatList
        data={courseSubjects}
        renderItem={({ item }) => <CourseCart item={item} navigation={navigation}/>}
        keyExtractor={(item) => item.id}
      />

    </SafeAreaView>
  );
};

export default AddCurrentCourseSubject;
