import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: Colors.secondary, justifyContent: 'center', alignItems: 'center' },

    logo: { height: RFPercentage(12), width: RFPercentage(12), },

    title: { fontSize: RFPercentage(10), fontWeight: "bold", marginTop: RFPercentage(2), color: Colors.primary },

    loginPrimaryButton: (primary) => ({ height: RFPercentage(4.5), borderRadius: RFPercentage(2), width: '40%', justifyContent: 'center', alignItems: "center", backgroundColor: primary ? Colors.primary : Colors.white, shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginVertical: RFPercentage(1) }),

    loginPrimaryButtonText: (primary) => ({ fontWeight: '600', color: primary ? Colors.secondary : Colors.primary }),

    shadow: { fontFamily: 'Poppins-SemiBold', textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 4 }
});