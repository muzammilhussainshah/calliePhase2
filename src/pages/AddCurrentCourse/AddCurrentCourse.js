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
import { getCourseDetail, getCourseSubjectList } from '../../store/action/action';
import ActionTypes from '../../store/constant/constant';
import Loader from '../../components/Loader';


const AddCurrentCourse = ({ navigation, route }) => {

  const selectedCourseSubject = route.params.item

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
  console.log(selectedCourse, 'selectedCourse')
  useEffect(() => {
    if (selectedSubjectCourses?.length > 0) setselectedSubjectCourse(selectedSubjectCourses)
  }, [selectedSubjectCourses])

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
          placeholder="Course Name"
          placeholderTextColor={Colors.gray}
        />
      </View>
      {/* <Text style={[styles.inputTitleMyCourse,]}>{`MY COURSES`}</Text> */}
      {loader ?
        <Loader color={Colors.white} />

        :
        <>
          {/* {selectedCourse?.data?.length > 0 ?
            <>
              <FlatList
                data={selectedCourse?.data}
                contentContainerStyle={styles.myCoursesContentContainer}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.myCoursesListContainer}>
                      <Text style={styles.myCoursesColor} >{item.name}</Text>
                      <Button
                        title={<AntDesign
                          name='close'
                          color={Colors.black}
                          size={RFPercentage(2)} />}
                        callBack={() => console.log('muzammil hussain')} />
                    </View>
                  )
                }}
                keyExtractor={(item) => item.id}
              />
              <Button
                title="SAVE"
                customStyle={styles.loginPrimaryButton(false)}
                titleStyle={styles.loginPrimaryButtonText(false)}
              />
            </> */}
          {/* : */}
          <FlatList
            data={selectedSubjectCourse}
            renderItem={({ item }) => <CourseCart item={item} selectedCourse={selectedCourse} setselectedCourse={setselectedCourse} />}
            keyExtractor={(item, index) => index.toString()}
          />

          {/* } */}
        </>

      }

    </SafeAreaView>
  );
};

export default AddCurrentCourse;
