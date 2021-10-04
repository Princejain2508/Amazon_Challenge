import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgE06ofunJlnqRPUjTvnq3JOZRGmNWtVA",
  authDomain: "challenge-8ddd7.firebaseapp.com",
  projectId: "challenge-8ddd7",
  storageBucket: "challenge-8ddd7.appspot.com",
  messagingSenderId: "468791724561",
  appId: "1:468791724561:web:f7b4cd409cb6752fbf7fb0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
