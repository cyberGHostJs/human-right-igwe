import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyDhfFfWVh5h-M__rdMixgJ52r7RC4NiQmw",
  authDomain: "humanrights-nig.firebaseapp.com",
  projectId: "humanrights-nig",
  storageBucket: "humanrights-nig.appspot.com",
  messagingSenderId: "586518353670",
  appId: "1:586518353670:web:37534ca3aa4dacb1f3f087",
  measurementId: "G-Z9JQ9N34ZG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();
