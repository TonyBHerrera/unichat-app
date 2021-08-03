import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAt_MNxOuma4TfovmgyksFFwxdRXgurqC0",
    authDomain: "unichat-95d5e.firebaseapp.com",
    projectId: "unichat-95d5e",
    storageBucket: "unichat-95d5e.appspot.com",
    messagingSenderId: "242741788126",
    appId: "1:242741788126:web:41f596bcdb9cf5de4e314f",
  })
  .auth();
