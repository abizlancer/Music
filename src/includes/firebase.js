import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO_ST7vr1L83Qwm0cBdR9un-bJJ6izLBc",
  authDomain: "music-ea4ca.firebaseapp.com",
  projectId: "music-ea4ca",
  storageBucket: "music-ea4ca.appspot.com",
  appId: "1:224474492657:web:a6ed16c803976e201fc350"
};
export default firebase.initializeApp(firebaseConfig)
