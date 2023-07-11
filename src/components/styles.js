import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../styles/Colors';
export const styles = StyleSheet.create({
    title: (isEdit) => ({
        color: Colors.white, fontSize: RFPercentage(2),
        fontWeight: '700',
        textTransform: 'capitalize',
        flex: isEdit ? 1 : 0,
        textAlign: "center"
    }),
    HeaderContainer: (isEdit) => ({
        height: RFPercentage(12),
        backgroundColor: Colors.tabBg,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',

        justifyContent: !isEdit ? 'space-between' : 'center',
        padding: RFPercentage(2)
    })
});