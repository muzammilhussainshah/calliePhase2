import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: { flex: 1, paddingHorizontal: RFPercentage(2), backgroundColor: Colors.primary, },

    backButtonContainer: { width: RFPercentage(3), marginBottom: RFPercentage(3) },

    inputTitle: { fontSize: 24, textAlign: "center", fontWeight: "600", color: Colors.white, width: '70%', alignSelf: 'center', },

    inlineInputsContainer: { flexDirection: 'row', alignItems: 'center', margin: RFPercentage(1), paddingHorizontal: RFPercentage(3), },

    inlineInput: { flex: 1, backgroundColor: 'white', margin: RFPercentage(1), maxHeight: RFPercentage(5), paddingHorizontal: RFPercentage(1), paddingVertical: 10, borderRadius: RFPercentage(.8), },

    description: { fontSize: RFPercentage(1.7), margin: RFPercentage(1), color: Colors.white, textAlign: "center", width: '90%', alignSelf: "center" },

    error: { color: 'red', fontSize: RFPercentage(2),marginTop:RFPercentage(-1), marginBottom: RFPercentage(1),textAlign:"center" },
});