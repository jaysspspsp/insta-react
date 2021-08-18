import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyArDTEliSr0NlwU-qnMT0l3Wx2BPiqMtJY",
    authDomain: "insta-52c2f.firebaseapp.com",
    projectId: "insta-52c2f",
    storageBucket: "insta-52c2f.appspot.com",
    messagingSenderId: "900292543178",
    appId: "1:900292543178:web:57712b35012fcdd1376a33",
    measurementId: "G-6E3M5GFT56"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};

