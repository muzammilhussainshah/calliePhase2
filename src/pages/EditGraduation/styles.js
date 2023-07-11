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
    dropDownContainer: { flex: 1, backgroundColor: Colors.white }
});