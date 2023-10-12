import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAHrakQOK5pfIkKS30gKMRuzasmgQB0un4",
    authDomain: "biblioteca-8466a.firebaseapp.com",
    projectId: "biblioteca-8466a",
    storageBucket: "biblioteca-8466a.appspot.com",
    messagingSenderId: "176678870988",
    appId: "1:176678870988:web:5b8284cea1d2cfbc7d4769"
   
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();