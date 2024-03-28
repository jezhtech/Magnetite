import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCiu37cfN_8tE67cbWuJ1Lk6jeu1JzWBdo",
    authDomain: "smart-safety-helmet-v1.firebaseapp.com",
    databaseURL: "https://smart-safety-helmet-v1-default-rtdb.firebaseio.com",
    projectId: "smart-safety-helmet-v1",
    storageBucket: "smart-safety-helmet-v1.appspot.com",
    messagingSenderId: "27068182553",
    appId: "1:27068182553:web:a536a9ca8e5e9a42033a88",
    measurementId: "G-HD174H2VLF"
  };

  if (firebase.apps.length==0){
  firebase.initializeApp(firebaseConfig)}
  export const db = firebase.database()

