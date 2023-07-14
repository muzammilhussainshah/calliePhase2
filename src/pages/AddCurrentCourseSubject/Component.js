
import React, {
    useState
} from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles';
import { Navigate } from '../../store/action/action';

export const CourseCart = ({ item, navigation }) => {

    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <TouchableOpacity
                activeOpacity={.8}
                onPress={() => Navigate(navigation, 'AddCurrentCourse', { item })}
                style={[styles.courseCartContainer, { marginVertical: isOpen ? 0 : RFPercentage(.5), }]}>
                <Text style={styles.courseCartTitle}>{item[`Subject Code`]}</Text>

                <TouchableOpacity activeOpacity={.8} onPress={() => setIsOpen(!isOpen)}      >
                    <AntDesign name={'right'} size={RFPercentage(2)} style={styles.cartDownArrow} />
                </TouchableOpacity>

            </TouchableOpacity>
        </>
    )

}