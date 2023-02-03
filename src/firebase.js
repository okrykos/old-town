// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlqR8SZSlFuoi09ePDTg6sMdtFAzV8sJg",
  authDomain: "oldtown-8eaa0.firebaseapp.com",
  projectId: "oldtown-8eaa0",
  storageBucket: "oldtown-8eaa0.appspot.com",
  messagingSenderId: "507231876799",
  appId: "1:507231876799:web:5e95798ab92f989123b80a",
  measurementId: "G-YLKKGD0F3Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
