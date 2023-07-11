import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: RFPercentage(3),
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    inputTitle: {
        fontSize: RFPercentage(3),
        fontWeight: "700",
        alignSelf: 'center',
        color: Colors.white,
        marginVertical: RFPercentage(1),
    },
    description: {
        fontSize: RFPercentage(1.7),
        color: Colors.secondary,
        textAlign: 'center',
    },
    body: {
        flex: 2,
        justifyContent: "center",
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    profileContainer: {
        height: RFPercentage(28),
        width: '80%',
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: -1,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: -2,
        marginVertical: RFPercentage(2),
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

    profileStyle: {
        height: '90%',
        width: '90%',
        resizeMode: 'cover'
    }

});