// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkJi5zuMc2RTIrlw4MBOk7neILQfovNis",
  authDomain: "genius-car-service-20215.firebaseapp.com",
  projectId: "genius-car-service-20215",
  storageBucket: "genius-car-service-20215.appspot.com",
  messagingSenderId: "415508241387",
  appId: "1:415508241387:web:07345994bb36941dc617ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;