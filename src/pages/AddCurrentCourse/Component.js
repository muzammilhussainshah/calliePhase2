
import React, {
    useState
} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { getCourseTiming } from '../../store/action/action';

export const CourseCart = ({ item, setselectedCourse }) => {
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()

    let allItem = item
    let data = item?.section
    let instructorArray = item?.instructorName

    return (
        <>
            <View style={[styles.courseCartContainer, { marginVertical: isOpen ? 0 : RFPercentage(.5), }]}>
                <Text style={styles.courseCartTitle}>{item?.text}</Text>
                <TouchableOpacity activeOpacity={.8} onPress={async () => {
                    setIsOpen(!isOpen)
                    if (!allItem.time) {
                        item?.content?.map(async (item) => {
                            dispatch(getCourseTiming(allItem, item))
                        })
                    }
                }}      >
                    <AntDesign name={!isOpen ? 'left' : "down"} size={RFPercentage(2)} style={styles.cartDownArrow} />
                </TouchableOpacity>
            </View >

            {isOpen &&
                <FlatList
                    data={data}
                    style={[styles.courseCartContainer, styles.mb1, { paddingHorizontal: 0, marginVertical: isOpen ? 0 : RFPercentage(.5), }]}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => { setselectedCourse(allItem) }}
                            style={[styles.selectedCourseDropdownContainer, { borderBottomWidth: index + 1 == data.length ? 0 : 1 },]}>
                            <Text style={[styles.courseCartTitle2, styles.mb1, { fontSize: RFPercentage(1.8), }]}>{instructorArray[index]} - {item}</Text>

                            {allItem?.time && allItem?.time[index] && allItem?.time[index].length > 0 && < Text style={[styles.courseCartTitle2, styles.mb1, { fontSize: RFPercentage(1.8), }, styles.fontNormal]}>{allItem?.time[index]}</Text>}
                        </TouchableOpacity >


                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            }

        </>
    )

}