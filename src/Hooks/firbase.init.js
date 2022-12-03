// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN75Q_bvLMYM2R6AX64eHZ8u_gZ99ib8E",
  authDomain: "auth-simpel-firebase2.firebaseapp.com",
  projectId: "auth-simpel-firebase2",
  storageBucket: "auth-simpel-firebase2.appspot.com",
  messagingSenderId: "935123827422",
  appId: "1:935123827422:web:3c7197754187c445db604f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;