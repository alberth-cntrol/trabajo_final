import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1F0lOfpdPXWBGEDn6A6Wjysuw1oHuk_0",
  authDomain: "react-fb-auth-ae841.firebaseapp.com",
  projectId: "react-fb-auth-ae841",
  storageBucket: "react-fb-auth-ae841.appspot.com",
  messagingSenderId: "30636261118",
  appId: "1:30636261118:web:018f60c77df55e11b9afaf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)