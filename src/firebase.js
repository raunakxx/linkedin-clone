import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVyqoc5gLz4GL_hCFHZtCMfUOD78N7wUk",
  authDomain: "linked-in-clone-fd0aa.firebaseapp.com",
  projectId: "linked-in-clone-fd0aa",
  storageBucket: "linked-in-clone-fd0aa.appspot.com",
  messagingSenderId: "556160458976",
  appId: "1:556160458976:web:b9371c78ba8490263df085",
  measurementId: "G-C2Q4403QMQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
