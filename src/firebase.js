// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEuULGU95f6pg2yGcldClrry7iUUWj3ds",
  authDomain: "fir-86937.firebaseapp.com",
  projectId: "fir-86937",
  storageBucket: "fir-86937.appspot.com",
  messagingSenderId: "653113664715",
  appId: "1:653113664715:web:00d6d67389be1aaf02274e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
