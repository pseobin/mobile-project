// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5jj9gHD3BP6K0GyEvwu7Ma1-pwchQjxc",
  authDomain: "mobile-project-9e5d5.firebaseapp.com",
  projectId: "mobile-project-9e5d5",
  storageBucket: "mobile-project-9e5d5.firebasestorage.app",
  messagingSenderId: "796644493327",
  appId: "1:796644493327:web:7fce1a462cb2a6dcc2bb7a",
  measurementId: "G-0QLSM2WKTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);  