import ActionTypes from "../constant/constant";
// import DeviceInfo from 'react-native-device-info';
// import firestore from '@react-native-firebase/firestore';
// import remoteConfig from '@react-native-firebase/remote-config';
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
// import { CommonActions } from '@react-navigation/native';

// const deviceId = DeviceInfo.getUniqueId();
import { Share } from "react-native";
const db = firebase.firestore();

export const Navigate = (navigation, screenName, prop) => {
    if (screenName == "pop") navigation.pop()
    else navigation.navigate(screenName, prop && prop)
}

export const onShare = async (shareMsg) => {
    try {
        const result = await Share.share({
            message:
                shareMsg,
            url: 'https://yourcallie.com/testflight',
            // title: 'test',
        });
        console.log(result, 'Shared!')
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        console.log(error, 'result')

        Alert.alert(error.message);
    }
};
// export const getCurrentUserData = async () => {
//     try {
//         const user = await firebase.auth().currentUser
//         let response = await db.collection('users').doc(user.uid).get()
//         console.log(response.data(), 'response')
//     } catch (error) {
//         alert(error.message)
//     }

// }

export const updateProfile = async (photoUrlData, navigation, setLoading) => {
    try {
        //         // dispatch({ type: ActionTypes.LOADER, payload: true })
        const response = await fetch(photoUrlData?.uri);
        const blob = await response.blob();

        // Generate a unique filename for the profile picture
        const fileName = `profilePictures/${firebase.auth().currentUser.uid}/${Date.now()}`;
        const user = firebase.auth().currentUser
        console.log(user, 'user')
        // Upload the image to Firebase Storage
        let reference = storage().ref()

        const uploadTask = reference.child(fileName).put(blob);

        // Listen to the upload progress
        uploadTask.on('state_changed',
            null,
            (error) => {
                // Handle any upload error
                console.error(error);
            },
            () => {
                // Update the user's profile picture URL in Firebase Authentication
                uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
                    // console.log(downloadURL, 'downloadURL')
                    await firebase.auth().currentUser.updateProfile({ photoURL: downloadURL, });
                    setLoading(false)
                    Navigate(navigation, 'AddCurrentCourse')
                });
            }
        );
    } catch (error) {
        setLoading(false)
        alert(error.message)
        console.log(error, 'result')

        // Alert.alert(error.message);
    }
};

export async function verifiedUserSaveInDb(getUserData) {
    const currentUser = firebase.auth().currentUser

    const userId = currentUser.uid
    // const currentUser = auth().currentUser
    const email = currentUser.email
    const data = {
        email: email,
        firstName: getUserData?.firstName,
        lastName: getUserData?.lastName,
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
                    setLoading(false)
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

// export const SignOut = async () => {
//     try {
//         setLoading(true)
//         dispatch({ type: ActionTypes.CURRENTUSER, payload: [] })
//         await AsyncStorage.removeItem("currentUserData");
//         await auth().signOut()
//         setLoading(false)
//         console.log("signout done")
//         // navigation.replace('Welcome')
//         navigation.navigate('Welcome')
//     } catch (error) {
//         Alert.alert(error)
//         console.log("eroor" + error.message)
//         navigation.navigate('Welcome')
//         // Error saving data
//     }
// }