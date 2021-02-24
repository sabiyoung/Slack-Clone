import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAE59JINd___9Q8Gysmjk6bf6NwO5gHzsI",
    authDomain: "slack-clone-92935.firebaseapp.com",
    projectId: "slack-clone-92935",
    storageBucket: "slack-clone-92935.appspot.com",
    messagingSenderId: "116659504198",
    appId: "1:116659504198:web:a2f3cbabf73ef4bcefb647",
    measurementId: "G-ZM6EXWFZTL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};