import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: { flex: 1, paddingHorizontal: RFPercentage(3), justifyContent: "center", backgroundColor: Colors.primary, },

    inputTitle: { fontSize: RFPercentage(3), fontWeight: "700", alignSelf: 'center', color: Colors.white, },

    description: { fontSize: RFPercentage(1.7), color: Colors.secondary, width: '80%', alignSelf: 'center' },

    editEmailButton: { fontWeight: "bold", marginVertical: RFPercentage(1), color: Colors.white, alignSelf: 'center' },

    loginPrimaryButton: (primary) => ({ height: RFPercentage(4.5), alignSelf: 'center', borderRadius: RFPercentage(2), width: '40%', justifyContent: 'center', alignItems: "center", backgroundColor: primary ? Colors.primary : Colors.white, shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginVertical: RFPercentage(1) }),

    loginPrimaryButtonText: (primary) => ({ fontWeight: '600', color: primary ? Colors.secondary : Colors.primary }),

    resendContainer: { flex: 1, justifyContent: "flex-end" },

    body: { flex: 2, justifyContent: 'flex-end' },

    nameStyle: { textTransform: "capitalize", alignSelf: 'flex-start', textAlign: 'left' },




    // inputTitle: {
    //     fontSize: 16,
    //     marginBottom: 10,
    //     color: 'black',
    // },
    
    disabledButton: {
        opacity: 0.5,
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    saveButton: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        padding: 10,
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});