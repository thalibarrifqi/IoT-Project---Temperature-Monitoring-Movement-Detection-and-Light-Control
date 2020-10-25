// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGuW7UT1GqIsKZcSnWCRX2QJnLN0mgpME",
    authDomain: "iot-home-202.firebaseapp.com",
    databaseURL: "https://iot-home-202.firebaseio.com",
    projectId: "iot-home-202",
    storageBucket: "iot-home-202.appspot.com",
    messagingSenderId: "287790507775",
    appId: "1:287790507775:web:dc6f7da84fc032454b4eca",
    measurementId: "G-JYJ6F4WWMV"
});

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const realtime = firebase.database()

export {db, auth, storage, realtime};

// export default firebaseApp