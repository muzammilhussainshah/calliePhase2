import React, {
  useEffect,
  useState
} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { launchImageLibrary } from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';

import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import { styles } from './styles';
import { updateProfile } from '../../store/action/action';

const AddProfile = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);

  const [imgUrl, setImgURL] = useState('')
  const [imgData, setImgData] = useState('')
  const getMenu = async () => {
    try {
      launchImageLibrary({ mediaType: 'photo' }, response => {
        if (response?.assets?.length && response?.assets[0]?.uri) {
          setImgURL(response?.assets[0]?.uri)
          setImgData(response?.assets[0])
        }
      });
    } catch (err) {
      console.log(err, '146');
    }
  };

  const renderContent = () => {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.inputTitle}>Profile Picture</Text>
          <Text style={styles.description}>
            Upload a photo of yourself.
          </Text>
          <Text style={styles.description}>
            You can always change it later.
          </Text>

          <TouchableOpacity
            onPress={getMenu}
            style={styles.profileContainer}>
            {imgUrl?.length > 0 ?
              <Image source={{ uri: imgUrl }} style={styles.profileStyle} /> :
              <AntDesign name="picture" size={RFPercentage(10)} color={Colors.gray} />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          {loading ?
            <View style={styles.container}>
              <ActivityIndicator size="large" color="#fff" />
            </View> :
            <Button
              title="SAVE"
              callBack={async () => {
                // await auth().signOut()
                await setLoading(true)
                await updateProfile(imgData, navigation, setLoading)
              }}
              customStyle={styles.loginPrimaryButton(false)}
              titleStyle={styles.loginPrimaryButtonText(false)}
            />
          }
        </View>
      </SafeAreaView>
    );
  };

  return renderContent();
};

export default AddProfile;
