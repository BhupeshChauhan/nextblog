import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_APIKEY,
  projectId: process.env.FIREBASE_APIKEY,
  storageBucket: process.env.FIREBASE_APIKEY,
  messagingSenderId: process.env.FIREBASE_APIKEY,
  appId: process.env.FIREBASE_APIKEY,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase

// Check if Firebase is not already initialized to avoid errors on hot reload
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
