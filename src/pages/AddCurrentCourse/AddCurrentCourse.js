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
import { useDispatch } from 'react-redux';
import { getCourseSubjectList } from '../../store/action/action';


const AddCurrentCourse = ({ navigation }) => {

  const [selectedCourse, setselectedCourse] = useState([])
  const dispatch = useDispatch()
  const navigateBack = () => { navigation.goBack(); };

  useEffect(() => {
    // dispatch(getCourseSubjectList())
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
      <Text style={[styles.inputTitleMyCourse,]}>{`MY COURSES`}</Text>

      {selectedCourse?.data?.length > 0 ?
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
                    callBack={() => console.log('ahmed shah')} />
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
        </>
        :

        <FlatList
          data={CARTDATA}
          renderItem={({ item }) => <CourseCart item={item} setselectedCourse={setselectedCourse} />}
          keyExtractor={(item) => item.id}
        />

      }

    </SafeAreaView>
  );
};

export default AddCurrentCourse;
