import React, {
  useEffect,
  useState
} from 'react';
import {
  View,
  Text, Keyboard,
  //AsyncStorage,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage } from 'react-native-responsive-fontsize';

import ActionTypes from '../../store/constant/constant';
import Button from '../../components/Button';
import { styles } from './styles';
import { ActivityIndicator } from "react-native";
import { Navigate } from '../../store/action/action';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
const db = firestore();

const VerifyEmail = ({ navigation, route }) => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState()
  const [getUserData, setGetUserData] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  const [newEmail, setNewEmail] = useState('');

  const [timer, setTimer] = useState(30);
  useEffect(() => {
console.log("verify")
    const getUserDataAsync = async (data) => {
      try {
        setLoading(true)
        let data = await AsyncStorage.getItem('currentUserData');
        console.log("verifyname"+JSON.stringify(data))
        if (JSON.parse(data) !== null) setGetUserData(JSON.parse(data))
        else await SignOut()
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error, 'error')
        Alert.alert(error)
        // Error saving data
      }
    }
    
    getUserDataAsync()
  }, [])
  useEffect(() => {
   // console.log("verifytimer")
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }

  }, [timer]);
    
    function verifiedUserSaveInDb() {
      const currentUser = auth().currentUser;
      const userId = currentUser.uid
      const email = currentUser.email

      const data = {
        email: email,
        firstName:getUserData?.firstName,
        lastName:getUserData?.lastName,
        isemailVerified: true,
      };

      if (userId) {
        // Check if the document already exists
        db.collection('users')
          .doc(userId)
          .get()
          .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
              // Document already exists, do not add new data
              console.log('Document already exists.');
            } else {
              // Document doesn't exist, add new data


              db.collection('users')
                .doc(userId)
                .set(data)
                .then(() => {
                  console.log('Document added successfully.');
                })
                .catch((error) => {
                  console.error('Error adding document: ', error);
                });
            }
          })
          .catch((error) => {
            console.error('Error getting document: ', error);
          });
      } else {
        console.error('User is not authenticated.');
      }

    }

    const SignOut = async () => {
      try {
        setLoading(true)
      dispatch({ type: ActionTypes.CURRENTUSER, payload: [] })
     await AsyncStorage.removeItem("currentUserData");
      await auth().signOut()
      setLoading(false)
      console.log("signout done")
     // navigation.replace('Welcome')
      navigation.navigate('Welcome')
    } catch (error) {
      Alert.alert(error)
      console.log("eroor"+error.message)
      navigation.navigate('Welcome')
      // Error saving data
    }
    }
  const handleSignIn = async ({ email, password }) => {
   //  await auth().signOut()

    setLoading(true)
     console.log("ddddd")
// `currentUser` is synchronous since FirebaseAuth rework
    //var user =  auth().currentUser;
    // await auth().currentUser.reload();
// `currentUser` is synchronous since FirebaseAuth rework
     //  let user =  auth().currentUser;

//      let user =  auth().currentUser;
//       user?.reload().then(() => {
//        // Signed in
//        let user2 =  auth().currentUser;
      //  alert("verifyemail"+user?.email + user?.emailVerified)
//      })
//         if (!!user && !user?.emailVerified) {
//             //interval = setInterval(() => {
//             user?.reload().then();
//            // }, 3000);
//         }
    //  alert("verifyemail"+user.email + user.emailVerified)
    try {
   const signInSuccess = await auth().signInWithEmailAndPassword(
     email ? email : getUserData.email,
     password ? password : getUserData.password
   );
   console.log(signInSuccess.user.emailVerified, 'signInSuccess', getUserData)

   if (signInSuccess.user.emailVerified)
   {
       verifiedUserSaveInDb() 
       Navigate(navigation, 'AddProfile');

   }
   else if (!email && !password) Alert.alert("Email not verified",'You have not verified your email. Check your inbox for a verification link or click Resend Email');
    setLoading(false)
  }
  catch(error)
  {
    setLoading(false)
    Alert.alert(error.message)
    await signOut()
    
  }
  };

  const handleResendEmail = async () => {
    const userCredential = auth().currentUser;
    if (userCredential) {
      await userCredential.sendEmailVerification();
      alert(`Link has been sent to ${getUserData?.email}`);
      setTimer(30);
    }
  };
  const handleEditEmail = () => {
    setModalVisible(true);
  };
  const addUserDataAsync = async (data) => {
    try {
      await AsyncStorage.setItem(
        'currentUserData',
        JSON.stringify(data),
      );
    } catch (error) {
      Alert.alert(error)
      // Error saving data
    }
  }
  const handleSaveEmail = async () => {
    // Perform validation or any necessary checks
    // Save the new email

    const user = auth().currentUser;

    try {
      await user.updateEmail(newEmail);
      // Email updated successfully
      // if (JSON.parse(data) !== null) setGetUserData(JSON.parse(data))
      getUserData.email = newEmail
      handleResendEmail()
      addUserDataAsync(getUserData)
      setModalVisible(false);
      console.log(getUserData, 'Email updated successfully', user);
    } catch (error) {
      // An error occurred while updating the email
      console.log('Error updating email:', error);
    }
  };
  return (
    loading ?
    <View style={styles.container}>
    <ActivityIndicator size="large" color="#fff" />
    </View>
      :
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.inputTitle}>{`Check your ${getUserData?.email} email.`}</Text>
        

        <View style={{ marginVertical: RFPercentage(3) }}>
          <Text style={styles.description}>
            We just sent a verification link to
            <Text style={{ fontWeight: 'bold', color: 'white' }}>{` ${getUserData?.email}.`}</Text>
            It may take a moment to arrive.
          </Text>
        </View>
        <TouchableOpacity onPress={handleEditEmail}>
          <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: '10%' }}>edit email address</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: '10%' }}>If you have verified your email then click "Continue" below</Text>
        <Button
          title={`Continue`}
          callBack={handleSignIn}
          customStyle={styles.loginPrimaryButton(false)}
          titleStyle={styles.loginPrimaryButtonText(false)}
        />
      </View>

      <View style={styles.resendContainer}>
        <TouchableOpacity
          onPress={handleResendEmail}
          disabled={timer > 0}
          style={timer > 0 ? styles.disabledButton : null}
        >
          <Text style={styles.editEmailButton}>
            {timer > 0 ? `Resend Email (${timer}s)` : 'Resend Email'}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter new email"
                value={newEmail}
                onChangeText={text => setNewEmail(text)}
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveEmail}>
                <Text style={styles.saveButtonText}>Verify New Email</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default VerifyEmail;
