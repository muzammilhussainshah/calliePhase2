import ActionTypes from "../constant/constant";
import { firebase } from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
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
export const getCurrentUserData = async () => {
    try {
        const user = await firebase.auth().currentUser
        if (user !== null) {
            let response = await db.collection('users').doc(user.uid).get()
            return response.data()
        }
    } catch (error) {
        alert(error.message)
    }
}

export const updateProfile = async (photoUrlData, navigation, setLoading) => {
    try {
        const response = await fetch(photoUrlData?.uri);
        const blob = await response.blob();
        // Generate a unique filename for the profile picture
        const fileName = `profilePictures/${firebase.auth().currentUser.uid}/${Date.now()}`;
        const user = firebase.auth().currentUser
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
                    let userdbData = await getCurrentUserData()
                    let clone = await JSON.parse(JSON.stringify(userdbData))
                    clone.photoURL = downloadURL
                    addDataToUserDb(user.uid, clone)
                    await firebase.auth().currentUser.updateProfile({ photoURL: downloadURL, });

                    setLoading(false)
                    Navigate(navigation, 'AddCurrentCourse')
                });
            }
        );
    } catch (error) {
        setLoading(false)
        alert(error.message)
    }
};

export async function addDataToUserDb(userId, data) {
    db.collection('users')
        .doc(userId)
        .set(data)
        .then(() => {
            console.log('addDataToUserDb successfully.');
        })
        .catch((error) => {
            console.error('Error adding document: ', error);
        });
}
export async function verifiedUserSaveInDb(getUserData) {
    console.log(getUserData, 'getUserData')
    const currentUser = firebase.auth().currentUser
    const userId = currentUser.uid
    const email = currentUser.email
    const data = {
        email: email,
        isemailVerified: true,
    };
    if (getUserData?.firstName) data.firstName = getUserData?.firstName;
    if (getUserData?.lastName) data.lastName = getUserData?.lastName;

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
// export function getCourseSubjectList() {
//     try {
//         // setloader(true)
//         var config = {
//             method: 'get',
//             url: `https://www.lsa.umich.edu/cg/cg_subjectlist.aspx?termArray=f_23_2460&cgtype=ug&allsections=true`,
//             headers: { 'Content-Type': 'application/json;charset=utf-8' },
//         };

//         axios(config)
//             .then(function (response) {
//                 const htmlContent = response.data;
//                 const $ = cheerio.load(htmlContent);
//                 // Use Cheerio selectors to extract the data you need
//                 const titles = [];
//                 $('td').each((index, element) => {
//                     const title = $(element).text().trim(); // Remove leading and trailing whitespace
//                     const cleanTitle = title.replace(/\n/g, ''); // Remove line breaks (\n)
//                     titles.push(cleanTitle);
//                 });
//                 // Create an array of objects with Subject Code and Description properties
//                 const data = [];
//                 for (let i = 0; i < titles.length; i += 2) {
//                     const subjectCode = titles[i];
//                     const description = titles[i + 1];
//                     data.push({ "Subject Code": subjectCode, "Description": description });
//                 }
//                 console.log(data, 'data')
//                 // Do something with the extracted data
//             })
//             .catch(function (error) {
//                 console.log(error, 'err profileData')
//             });
//     }
//     catch (err) {
//         console.log(err, 'err profileData')
//     }
// }