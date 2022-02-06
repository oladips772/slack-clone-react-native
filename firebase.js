/** @format */
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBberc49EMwYF58TjI3kK9ys4-HMZgIAw",
  authDomain: "slack-clone-react-native.firebaseapp.com",
  projectId: "slack-clone-react-native",
  storageBucket: "slack-clone-react-native.appspot.com",
  messagingSenderId: "646544315393",
  appId: "1:646544315393:web:9c8d6964ca79865cfddc00",
  measurementId: "G-S5FDC1BMHT",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
