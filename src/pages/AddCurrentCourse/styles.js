import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: RFPercentage(2),
        backgroundColor: Colors.primary,
    },
    inputTitle: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "600",
        color: Colors.white,
        width: '70%',
        alignSelf: 'center',
    },
    inputTitleMyCourse: {
        fontSize: 24,
        fontWeight: "600",
        color: Colors.white,
        marginHorizontal: RFPercentage(3),
        marginBottom: RFPercentage(1)
    },
    backButtonContainer: {
        width: RFPercentage(3),
        marginHorizontal: RFPercentage(3),
        marginBottom: RFPercentage(3)
    },

    description: {
        fontSize: RFPercentage(1.7),
        color: Colors.secondary,
        width: "80%",
        marginVertical: RFPercentage(1.5),
        // textAlign: 'center',
        marginLeft: RFPercentage(3),
        // alignSelf: "center"
    },
    searchContainer: {
        flexDirection: 'row',
        marginVertical: RFPercentage(1),
        // backgroundColor:'red',
        alignItems: 'center',
        justifyContent: "center"
    },
    inlineInput: {
        flex: 1,
        backgroundColor: 'white',
        margin: RFPercentage(1),
        maxHeight: RFPercentage(5),
        paddingHorizontal: RFPercentage(1),
        paddingVertical: 10,
        borderRadius: RFPercentage(.8),
        borderWidth: 1,
        marginRight: RFPercentage(3),
    },
    courseCartContainer: {
        backgroundColor: 'red',
        width: '70%',
        alignSelf: 'center',
        backgroundColor: Colors.white,
        borderRadius: RFPercentage(1),
        paddingHorizontal: RFPercentage(1),
        justifyContent: 'space-between',
        overflow: "hidden"
    },
    courseCartTitle: {
        fontSize: RFPercentage(2),
        fontWeight: "600",
        marginTop: RFPercentage(1),
        width: '90%',
    },
    courseCartTitle2: {
        fontSize: RFPercentage(2),
        fontWeight: "600",

        width: '90%',
    },
    cartDownArrow: {
        alignSelf: "flex-end",
        marginBottom: RFPercentage(1)
    },
    mb1: { marginHorizontal: RFPercentage(1) },
    fontNormal: { fontWeight: 'normal' },
    selectedCourseDropdownContainer: {
        paddingVertical: RFPercentage(2),
        backgroundColor: Colors.lightGray,
        borderBottomColor: Colors.primary,
    },
    myCoursesListContainer: {
        backgroundColor: Colors.white,
        borderRadius: RFPercentage(1),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        padding: RFPercentage(1),
        margin: RFPercentage(1),
        shadowColor: '#000',
        shadowOffset: {
            width: -1,
            height: 1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: -2,

    },
    myCoursesColor: {
        color: Colors.black,
        fontSize: RFPercentage(2),
        fontWeight: "600",
    },
    myCoursesContentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: "90%",
        alignSelf: "center"
    },
    coursesContainer: {
        height: RFPercentage(50),
        backgroundColor: 'blue'
    },
    loginPrimaryButton: (primary) => ({
        height: RFPercentage(4.5),
        alignSelf: 'center',
        borderRadius: RFPercentage(2),
        width: '40%',
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
        marginVertical: RFPercentage(1)
    }),
    loginPrimaryButtonText: (primary) => ({
        fontWeight: '600',
        color: primary ? Colors.secondary : Colors.primary
    }),
});