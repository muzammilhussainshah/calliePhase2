import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: Colors.secondary, paddingHorizontal: RFPercentage(2) },
    logo: { height: RFPercentage(4), width: RFPercentage(4) },
    headerText: { color: Colors.primary, fontSize: RFPercentage(4), fontWeight: '700' },
    headerContainer: { flexDirection: "row", alignItems: 'center' },
    inputTitle: { fontSize: RFPercentage(3), fontWeight: 'bold', marginBottom: RFPercentage(4), color: Colors.black, textAlign: 'center' },
    description: { fontSize: RFPercentage(2.3), color: Colors.black, textAlign: "center" },
    loginPrimaryButton: (primary) => ({ height: RFPercentage(4.5), borderRadius: RFPercentage(2), width: '50%', justifyContent: 'center', alignItems: "center", backgroundColor: primary ? Colors.primary : Colors.white, shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginVertical: RFPercentage(1), alignSelf: "center" }),
    loginPrimaryButtonText: (primary) => ({ fontWeight: '600', color: primary ? Colors.secondary : Colors.primary }),
    shadow: { fontFamily: 'Poppins-SemiBold', textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }
});