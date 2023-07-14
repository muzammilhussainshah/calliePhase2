
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
import { useDispatch, useSelector } from 'react-redux';
import { getCourseTiming } from '../../store/action/action';
import Loader from '../../components/Loader';
import Colors from '../../styles/Colors';

export const CourseCart = ({ item, selectedCourse, setselectedCourse }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [loader, setloader] = useState(false)
    const courseDataLoader = useSelector((state) => state.root.courseDataLoader)

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
                            dispatch(getCourseTiming(item, setloader))
                        })
                    }
                }}      >
                    <AntDesign name={!isOpen ? 'left' : "down"} size={RFPercentage(2)} style={styles.cartDownArrow} />
                </TouchableOpacity>
            </View >

            {isOpen &&
                <FlatList
                    data={data}
                    style={[styles.courseCartContainer, styles.mb1, { paddingHorizontal: 0, marginBottom: RFPercentage(.5), }]}
                    renderItem={({ item, index }) => (
                        < TouchableOpacity
                            onPress={() => {
                                // let abc = []
                                // let newArray = []
                                let data = JSON.parse(JSON.stringify(selectedCourse))
                                // if (JSON.parse(JSON.stringify(selectedCourse))?.length > 0) newArray.push(JSON.parse(JSON.stringify(selectedCourse)))
                                // newArray.push(allItem)
                                // console.log(selectedCourse, allItem, 'selectedCourse', newArray, JSON.parse(JSON.stringify(selectedCourse)))
                                let obj = {}
                                obj.instructorName = instructorArray[index]
                                obj.content = allItem?.content[index]
                                obj.section = item
                                obj.text = allItem?.text
                                obj.time = allItem?.time[index]

                                // obj.section.filter()
                                let getIndex = data.findIndex((val) => val?.content[0] == obj?.content[0])
                                // console.log(getIndex, 'selectedCourse', obj, data)
                                if (getIndex == -1) data.push(obj)
                                else data.splice(getIndex, 1)
                                setselectedCourse(data)
                            }}
                            style={[styles.selectedCourseDropdownContainer, { borderBottomWidth: index + 1 == data.length ? 0 : 1 },]}>
                            {loader ?
                                <Loader color={Colors.black} />
                                :
                                <>
                                    <Text style={[styles.courseCartTitle2, styles.mb1, { fontSize: RFPercentage(1.8), }]}>{instructorArray[index]} - {item}</Text>
                                    {allItem?.time && allItem?.time[index] && allItem?.time[index].length > 0 && < Text style={[styles.courseCartTitle2, styles.mb1, { fontSize: RFPercentage(1.8), }, styles.fontNormal]}>{allItem?.time[index]}</Text>}
                                </>

                            }
                        </TouchableOpacity >


                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            }

        </>
    )

}