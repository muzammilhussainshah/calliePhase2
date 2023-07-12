import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        // paddingHorizontal: RFPercentage(2),
        backgroundColor: Colors.primary,
    },
    inputTitle: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        color: Colors.white,
        marginHorizontal: RFPercentage(3),
        alignSelf: 'flex-end',
    },
    whatIsMajorContainer: {
        flexDirection: "row",
        marginVertical: RFPercentage(2),
        justifyContent: "center"
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
        fontWeight: '700',
        color: primary ? Colors.secondary : Colors.primary
    }),
    // dropDownContainer: { flex: 1, backgroundColor: Colors.white },


    dropdown2BtnStyle: {
        height: RFPercentage(5), width: '60%', alignSelf: 'center', justifyContent: "center", alignItems: 'center', overflow: 'hidden',
        // width: '100%',
        // height: '100%',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderRadius: RFPercentage(1),
    },
    dropdown2BtnTxtStyle: {
        color: Colors.gray,
        textAlign: 'left',
        // fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
        // backgroundColor: '#444',
        // borderBottomLeftRadius: 12,
        borderRadius: 12
        // borderBottomRightRadius: 12,
    },
    dropdown2RowStyle: {
        // ƒbackgroundColor: '#444',
        borderBottomColor: '#C5C5C5'
    },
    dropdown2RowTxtStyle: {
        color: Colors.gray,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    dropdownMainContainer: { height: RFPercentage(5), width: '60%', alignSelf: 'center', justifyContent: "center", alignItems: 'center', overflow: 'hidden', },
    header: { flex: 2, },
    body: { flex: 8, },
});