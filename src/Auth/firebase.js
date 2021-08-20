import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyXDebbUDSYP1nXHCCFezfR5gd9hDGiRM",
    authDomain: "gbmessendger.firebaseapp.com",
    databaseURL: "https://gbmessendger-default-rtdb.firebaseio.com",
    projectId: "gbmessendger",
    storageBucket: "gbmessendger.appspot.com",
    messagingSenderId: "241519443002",
    appId: "1:241519443002:web:774a44bc89e65bdea58903"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;