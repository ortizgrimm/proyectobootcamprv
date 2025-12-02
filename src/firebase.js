import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmW8bkJwFQsTOCNhb8-Qu4FDS768oN-vE",
  authDomain: "proyecboot.firebaseapp.com",
  projectId: "proyecboot",
  storageBucket: "proyecboot.firebasestorage.app",
  messagingSenderId: "647212471780",
  appId: "1:647212471780:web:6a2066560bd7dde954e3f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
