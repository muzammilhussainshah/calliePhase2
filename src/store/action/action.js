import ActionTypes from "../constant/constant";
// import DeviceInfo from 'react-native-device-info';
// import firestore from '@react-native-firebase/firestore';
// import remoteConfig from '@react-native-firebase/remote-config';
import { firebase } from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
// import { CommonActions } from '@react-navigation/native';

// const deviceId = DeviceInfo.getUniqueId();
import { Share } from "react-native";

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



export function updateProfile(photoUrlData,) {
    return dispatch => {
        dispatch({ type: ActionTypes.LOADER, payload: true })

        console.log(profileData, 'update profile dat')
        const user = firebase.auth().currentUser

        const path = photoUrlData?.uri
        const filename = photoUrlData?.fileName
        let profileObj = {}

        if (photoUrlData) {
            uploadImageToStorage(path, filename).then((downloadUrl) => {
                console.log(downloadUrl, 'downloadUrl')
                // if (downloadUrl) profileObj.photoURL = downloadUrl
                // if (profileData?.firstName?.length > 0) profileObj.firstName = profileData?.firstName
                // if (profileData?.lastName?.length > 0) profileObj.lastName = profileData?.lastName
                // if (profileData?.date) profileObj.dob = new Date(profileData?.date).valueOf()
                // if (profileData?.TOSvalue?.length > 0) profileObj.TOSvalue = profileData?.TOSvalue
                // if (profileData?.LOSvalue?.length > 0) profileObj.LOSvalue = profileData.LOSvalue
                // if (profileData?.selectedLanguages?.length > 0) profileObj.languages = profileData.selectedLanguages
                // if (profileData?.bio?.length > 0) profileObj.about = profileData.bio
                // if (profileData?.location?.length > 0) profileObj.location = profileData.location
                // if (profileData?.firstName.length > 0 && profileData?.lastName?.length > 0) profileObj.displayName = profileData?.firstName + ' ' + profileData?.lastName

                // dispatch({ type: ActionTypes.CURRENTUSER, payload: { ...currentUser, ...profileObj } })
                // console.log(profileObj, 'profileObj')
                // if (user?.uid) {
                //     console.log(user?.uid, 'adsdasdas')
                //     firestore()
                //         .collection('chums')
                //         .doc(user?.uid)
                //         .update(profileObj)
                //         .then(() => console.log('updated'))

                // }
                // dispatch({ type: ActionTypes.LOADER, payload: false })

            }).catch((error) => {
                // dispatch({ type: ActionTypes.LOADER, payload: false })
                console.log(error, 'downloadUrl')

            })
        } else {
            // if (profileData?.firstName?.length > 0) profileObj.firstName = profileData?.firstName
            // if (profileData?.lastName?.length > 0) profileObj.lastName = profileData?.lastName
                console.log(  'else')
                // if (profileData?.date) profileObj.dob = new Date(profileData?.date).valueOf()
            // if (profileData?.TOSvalue?.length > 0) profileObj.TOSvalue = profileData?.TOSvalue

            // if (profileData?.LOSvalue?.length > 0) profileObj.LOSvalue = profileData.LOSvalue
            // if (profileData?.selectedLanguages?.length > 0) profileObj.languages = profileData.selectedLanguages
            // if (profileData) profileObj.about = profileData.bio
            // if (profileData?.location?.length > 0) profileObj.location = profileData.location
            // if (profileData?.firstName.length > 0 && profileData?.lastName?.length > 0) profileObj.displayName = profileData?.firstName + ' ' + profileData?.lastName

            // dispatch({ type: ActionTypes.CURRENTUSER, payload: { ...currentUser, ...profileObj } })
            // console.log(profileObj, 'profileObj')
            // if (user?.uid) {
            //     console.log(user?.uid, 'adsdasdas')
            //     firestore()
            //         .collection('chums')
            //         .doc(user?.uid)
            //         .update(profileObj)
            //         .then(() => console.log('updated'))

            // }
            // dispatch({ type: ActionTypes.LOADER, payload: false })

        }

        // let profileObj = {}
        // if (profileData?.firstName?.length > 0) profileObj.firstName = profileData?.firstName
        // if (profileData?.lastName?.length > 0) profileObj.lastName = profileData?.lastName
        // if (profileData?.date) profileObj.dob = new Date(profileData?.date).valueOf()
        // if (profileData?.TOSvalue?.length > 0) profileObj.TOSvalue = profileData?.TOSvalue

        // if (profileData?.LOSvalue?.length > 0) profileObj.LOSvalue = profileData.LOSvalue
        // if (profileData?.selectedLanguages?.length > 0) profileObj.languages = profileData.selectedLanguages
        // if (profileData?.bio?.length > 0) profileObj.about = profileData.bio
        // if (profileData?.location?.length > 0) profileObj.location = profileData.location
        // if (profileData?.firstName.length > 0 && profileData?.lastName?.length > 0) profileObj.displayName = profileData?.firstName + ' ' + profileData?.lastName

        // dispatch({ type: ActionTypes.CURRENTUSER, payload: { ...currentUser, ...profileObj } })
        // console.log(profileObj, 'profileObj')
        // if (user?.uid) {
        //     console.log(user?.uid, 'adsdasdas')
        //     firestore()
        //         .collection('chums')
        //         .doc(user?.uid)
        //         .update(profileObj)
        //         .then(() => console.log('updated'))

        // }

    }
}

const uploadImageToStorage = async (path, name) => {
    let reference = storage().ref(name);
    let task = await reference.putFile(path);

    if (task) {
        return await reference.getDownloadURL()
    }
}