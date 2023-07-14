
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

export const CourseCart = ({ item, setselectedCourse }) => {
    const [isOpen, setIsOpen] = useState(false)

    let allItem = item
    let data = item?.section
    let instructorArray = item?.instructorName
    console.log(item, 'item')

    return (
        <>
            <View style={[styles.courseCartContainer, { marginVertical: isOpen ? 0 : RFPercentage(.5), }]}>
                <Text style={styles.courseCartTitle}>{item?.text}</Text>

                <TouchableOpacity activeOpacity={.8} onPress={() => setIsOpen(!isOpen)}      >
                    <AntDesign name={!isOpen ? 'left' : "down"} size={RFPercentage(2)} style={styles.cartDownArrow} />
                </TouchableOpacity>

            </View>

            {isOpen &&
                <FlatList
                    data={data}
                    style={[styles.courseCartContainer, styles.mb1, { paddingHorizontal: 0 }]}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => { setselectedCourse(allItem) }}
                            style={[styles.selectedCourseDropdownContainer, { borderBottomWidth: index + 1 == data.length ? 0 : 1 },]}>
                            <Text style={[styles.courseCartTitle2, styles.mb1, { fontSize: RFPercentage(1.8), fontWeight: "bold", width: "100%" }]}>{instructorArray[index]} - {item}</Text>
                            <Text style={[styles.courseCartTitle2, styles.mb1, { fontSize: RFPercentage(1.8), }, styles.fontNormal]}>{`MW 11:30-1:00 pm`}</Text>
                        </TouchableOpacity>


                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            }

        </>
    )

}