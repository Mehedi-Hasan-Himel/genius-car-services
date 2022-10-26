// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRxa9npFnakh_W1c5r38vVgBaUMGZKxbk",
  authDomain: "genius-car-services-a1075.firebaseapp.com",
  projectId: "genius-car-services-a1075",
  storageBucket: "genius-car-services-a1075.appspot.com",
  messagingSenderId: "176925787592",
  appId: "1:176925787592:web:a1b011e152996ed1b32cfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth