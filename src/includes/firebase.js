import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {  
  apiKey: "AIzaSyBgqIHIX0S3s0PzTJLi_2PgDKn7_xSWB7E",
  authDomain: "music-4c96e.firebaseapp.com",
  projectId: "music-4c96e",
  storageBucket: "music-4c96e.appspot.com",
  appId: "1:260844384655:web:d117123b07f44cc41a9bfa"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments")

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage
}
