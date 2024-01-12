// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBGUBhR7geO06BXzxgD62xw7iu62wW05H0",
    authDomain: "todoapp-7a775.firebaseapp.com",
    projectId: "todoapp-7a775",
    storageBucket: "todoapp-7a775.appspot.com",
    messagingSenderId: "411740660443",
    appId: "1:411740660443:web:5f53690dfb4de1488922fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;