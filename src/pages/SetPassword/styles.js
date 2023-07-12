import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: RFPercentage(3),
        justifyContent: "center",
        backgroundColor: Colors.primary,
    },
    description: {
        fontSize: RFPercentage(1.9),
        color: Colors.secondary,
        width: '80%',
    },
    editEmailButton: {
        fontWeight: "bold",
        marginVertical: RFPercentage(1),
        color: Colors.white,
        alignSelf: 'center'
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
    errorText: { color: 'red' },
    loginPrimaryButtonText: (primary) => ({
        fontWeight: '600',
        color: primary ? Colors.secondary : Colors.primary
    }),
    inlineInput: {
        flex: 1,
        backgroundColor: 'white',
        margin: RFPercentage(1),
        maxHeight: RFPercentage(5),
        paddingHorizontal: RFPercentage(1),
        paddingVertical: 10,
        borderRadius: RFPercentage(.8),
    },
    inputTitle: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        marginBottom: RFPercentage(4),
        color: Colors.white,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.inputBackground,
        borderRadius: RFPercentage(2),
        marginBottom: RFPercentage(2),
    },
    input: {
        flex: 1,
        padding: RFPercentage(1),
        fontSize: RFPercentage(2),
        borderRadius: RFPercentage(.5),
        color: Colors.black,
    },
    eyeButton: {
        paddingHorizontal: RFPercentage(2),
    },
    backButtonContainer: {
        flexDirection: 'row',
        width: RFPercentage(3),
        marginBottom: RFPercentage(3)
    },
    textAlignCenter: { textAlign: "center" },
    title: {
        textAlign: "center",
        fontWeight: 'normal',
        alignSelf: 'center',
        width: '80%',
        fontSize: RFPercentage(2.5)
    },
    inputContainer2: {
        alignSelf: 'center',
        paddingHorizontal: RFPercentage(1),
        marginBottom: RFPercentage(3)
    },
    inputEmail: {
        backgroundColor: Colors.white,
        maxWidth: '83%'
    },
    forgetPass: {
        textAlign: 'center',
        marginVertical: RFPercentage(2)
    },
    newUser: {
        fontWeight: '700',
        width: "100%",
        color: Colors.white,
        textAlign: "center"
    },
    checkContainer: {
        flexDirection: "row",
        alignSelf: "center"
    },


});