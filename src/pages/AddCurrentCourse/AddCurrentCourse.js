import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Alert
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles';
import { CARTDATA } from './dummyData';
import { CourseCart } from './Component';
import Colors from '../../styles/Colors';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, getCourseDetail, } from '../../store/action/action';
import ActionTypes from '../../store/constant/constant';
import Loader from '../../components/Loader';


const AddCurrentCourse = ({ navigation, route }) => {

  const selectedCourseSubject = route.params.item

  const [loading, setLoading] = useState(false);
  const [selectedCourse, setselectedCourse] = useState([])
  const [selectedSubjectCourse, setselectedSubjectCourse] = useState([])

  const selectedSubjectCourses = useSelector((state) => state.root.selectedSubjectCourses)
  const loader = useSelector((state) => state.root.loader)

  const navigateBack = () => { navigation.goBack(); };

  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedCourseSubject) dispatch(getCourseDetail(selectedCourseSubject[`Subject Code`]))
    return () => {
      dispatch({ type: ActionTypes.SELECTEDSUBJECTCOURSES, payload: [] });
      setselectedSubjectCourse([])
    }

  }, [])
  useEffect(() => {
    if (selectedSubjectCourses?.length > 0) setselectedSubjectCourse(selectedSubjectCourses)
  }, [selectedSubjectCourses])

  const searchUser = (e) => {
    let keywords = e.split(' ');
    // setsearch(keywords);
    if (keywords[0] === '') {
      setselectedSubjectCourse(selectedSubjectCourses);
    }
    if (keywords[0] !== '') {
      let searchPattern = new RegExp(
        keywords.map((term) => `(?=.*${term})`).join(''),
        'i'
      );
      let filterChat = [];
      for (let index = 0; index < selectedSubjectCourse?.length; index++) {
        filterChat = selectedSubjectCourse?.filter((data) => {
          return data[`text`].match(searchPattern);
        });
      }
      setselectedSubjectCourse(filterChat);
    }
  };
  return (
    <SafeAreaView style={[styles.container, {}]}>

      <TouchableOpacity onPress={navigateBack} style={styles.backButtonContainer}>
        <AntDesign name="arrowleft" color={Colors.white} size={RFPercentage(3)} />
      </TouchableOpacity>

      <Text style={styles.inputTitle}>{`Add your courses`}</Text>
      <Text style={styles.description}>{`Add all the courses you are currently taking to help us connect you with others in your classes.`}</Text>

      <View style={styles.searchContainer}>
        <Text style={[styles.description, { width: 'auto' }]}>{`Search courses`}</Text>
        <TextInput
          style={styles.inlineInput}
          onChangeText={(text) => searchUser(text)}
          placeholder="Course Name"
          placeholderTextColor={Colors.gray}
        />
      </View>
      {loader ?
        <Loader color={Colors.white} />
        :
        <>
          <FlatList
            data={selectedSubjectCourse}
            renderItem={({ item }) => <CourseCart item={item} selectedCourse={selectedCourse} setselectedCourse={setselectedCourse} />}
            keyExtractor={(item, index) => index.toString()}
          />
          <View >
            {loading ?
              <View style={styles.container}>
                <ActivityIndicator size="large" color="#fff" />
              </View> :
              <Button
                title="SAVE"
                callBack={async () => {
                  if (selectedCourse?.length == 0) Alert.alert("Please select any course")
                  else Navigate(navigation, 'MyCourses', selectedCourse)
                }}
                customStyle={styles.loginPrimaryButton(false)}
                titleStyle={styles.loginPrimaryButtonText(false)}
              />
            }
          </View>
          {/* } */}
        </>

      }

    </SafeAreaView>
  );
};

export default AddCurrentCourse;
