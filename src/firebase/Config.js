// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_v3hphS00Dy5pB2zyZRvC8EkDgqOnotI",
  authDomain: "my-website-41172.firebaseapp.com",
  projectId: "my-website-41172",
  storageBucket: "my-website-41172.appspot.com",
  messagingSenderId: "903762216304",
  appId: "1:903762216304:web:108b31ab856c0a8eeefbb5",
  measurementId: "G-KDZZFWCM9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
