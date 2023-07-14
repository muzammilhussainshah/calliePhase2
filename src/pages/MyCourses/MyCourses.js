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
import { Navigate, getCourseDetail, getCourseSubjectList } from '../../store/action/action';
import ActionTypes from '../../store/constant/constant';
import Loader from '../../components/Loader';


const MyCourses = ({ navigation, route }) => {
  const myCourses = route.params
  const [myCoursesSt, setMyCoursesSt] = useState(myCourses && myCourses)
  const loader = useSelector((state) => state.root.loader)

  const navigateBack = () => { navigation.goBack(); };

  const dispatch = useDispatch()

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
      <Text style={[styles.inputTitleMyCourse,]}>{`MY COURSES`}</Text>

      <FlatList
        data={myCoursesSt}
        contentContainerStyle={styles.myCoursesContentContainer}
        renderItem={({ item }) => {
          let newText = item.text.split(' - ')[0];
          let newSectionText = item.section.match(/\d+/)[0];

          return (
            <View style={styles.myCoursesListContainer}>
              <Text style={styles.myCoursesColor} >{newText}-{newSectionText}</Text>
              <Button
                title={<AntDesign
                  name='close'
                  color={Colors.black}
                  size={RFPercentage(2)} />}
                callBack={() => {
                  let deepCopy = JSON.parse(JSON.stringify(myCoursesSt));

                  let getIndex = deepCopy.findIndex((val) => val.content[0] == item.content[0])
                  if (getIndex !== -1) deepCopy.splice(getIndex, 1)
                  console.log(deepCopy, 'deepCopydeepCopy')
                  setMyCoursesSt(deepCopy)
                  // console.log(myCoursesSt, 'myCoursesStmyCoursesSt', item)
                }} />
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

      {/* : */}
    </SafeAreaView>
  );
};

export default MyCourses;
