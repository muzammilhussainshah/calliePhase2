import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: {
        height: 20,
        flex: 1,
        backgroundColor: Colors.white
    },
    headerContainer: {
        height: RFPercentage(5),
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: RFPercentage(2)
    },
    calenderContainer: {
        height: RFPercentage(8),
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        width: "90%",
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: RFPercentage(2)
    },
    headerText: {
        fontWeight: "bold",
        fontSize: RFPercentage(3)
    },
    chatWithYourMates: {
        fontWeight: "bold",
        fontSize: RFPercentage(2.2),
        margin: RFPercentage(1)
    },
    myCourseContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: RFPercentage(2),
        alignItems: 'center',
        marginVertical: RFPercentage(1),
        height: RFPercentage(10),
        borderWidth: 1.5,
        borderColor: Colors.blue,
        width: "90%",
        alignSelf: 'center',
        borderRadius: RFPercentage(1.5),
    },
    CourseName: {
        fontWeight: "bold",
        fontSize: RFPercentage(2.7)
    },
    CourseTime: {
        fontSize: RFPercentage(1.8)
    },
    CourseNameAndTimeContainer: {
    },
    chatBtnContainer: {
    },
    loginPrimaryButton: (primary) => ({
        height: RFPercentage(4),
        borderRadius: RFPercentage(2),
        paddingHorizontal: RFPercentage(2),
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: primary ? Colors.primary : Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 2,
        borderColor: Colors.blue,
        marginVertical: RFPercentage(1)
    }),

    loginPrimaryButtonText: (primary) => ({
        fontWeight: '600',
        // borderWidth:1,
        color: primary ? Colors.secondary : Colors.primary
    }),
    calenderModalContainer: {
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    calenderModal: { backgroundColor: Colors.white, width: '90%', alignSelf: 'center', overflow: "hidden", borderRadius: RFPercentage(2) },
    calenderCrossConatianer: { height: RFPercentage(4), justifyContent: "center", alignItems: 'flex-end', paddingHorizontal: RFPercentage(2) }

});