import React, {
  useState
} from 'react';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import { styles } from './styles';

const AddProfile = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.inputTitle}>Profile Picture</Text>
          <Text style={styles.description}>
            Upload a photo of yourself.
          </Text>
          <Text style={styles.description}>
            You can always change it later.
          </Text>
          <View style={styles.profileContainer}>
            <AntDesign name="picture" size={RFPercentage(10)} color={Colors.gray} />
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            title="SAVE"
            customStyle={styles.loginPrimaryButton(false)}
            titleStyle={styles.loginPrimaryButtonText(false)}
          />
        </View>
      </View>
    );
  };

  return renderContent();
};

export default AddProfile;
