import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_M_BLfryzXUBc2y8ZgyzjTY5Z4FQeLi8",
  authDomain: "bookstore-f7cbd.firebaseapp.com",
  projectId: "bookstore-f7cbd",
  storageBucket: "bookstore-f7cbd.appspot.com",
  messagingSenderId: "1051910331573",
  appId: "1:1051910331573:web:1d789ffdda9bf3042fb2fc",
  measurementId: "G-W98VR7ZKLL",
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
