
import React, {
    useState
} from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { firebase } from '@react-native-firebase/auth';

import { styles } from './styles';
import { Navigate, addDataToUserDb, getCurrentUserData } from '../../store/action/action';

export const CourseCart = ({ item, navigation }) => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={.8}
                onPress={async () => {
                    const user = firebase.auth().currentUser
                    let userdbData = await getCurrentUserData()
                    let clone = await JSON.parse(JSON.stringify(userdbData))
                    clone.selectedCourseSubject = item
                    addDataToUserDb(user.uid, clone)
                    Navigate(navigation, 'AddCurrentCourse', { item })
                }}
                style={[styles.courseCartContainer, { marginVertical: RFPercentage(.5), }]}>
                <Text style={styles.courseCartTitle}>{item[`Subject Code`]}</Text>

                <TouchableOpacity activeOpacity={.8}  >
                    <AntDesign name={'right'} size={RFPercentage(2)} style={styles.cartDownArrow} />
                </TouchableOpacity>

            </TouchableOpacity>
        </>
    )

}