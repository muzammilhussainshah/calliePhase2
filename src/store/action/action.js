import ActionTypes from "../constant/constant";
// import DeviceInfo from 'react-native-device-info';
// import firestore from '@react-native-firebase/firestore';
// import remoteConfig from '@react-native-firebase/remote-config';
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

