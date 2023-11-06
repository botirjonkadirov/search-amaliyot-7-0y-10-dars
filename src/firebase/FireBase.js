// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqMYb1_SU6vQ3BVcDu79fuh8Os6J0qHbg",
  authDomain: "unsplash-bk.firebaseapp.com",
  projectId: "unsplash-bk",
  storageBucket: "unsplash-bk.appspot.com",
  messagingSenderId: "410875411438",
  appId: "1:410875411438:web:66f67f1db14e959980ecff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const provider = new GoogleAuthProvider()

export const signUpLoginWithGoogle = async ()=>{
   try {
        const result = await signInWithPopup(auth, provider);
        return result
    } catch (error) {
        return error
    }
}