import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDDqFKKrs8_iJM1tFHeMSb7LMRZkgWRQ8",
  authDomain: "bookstore-70c4e.firebaseapp.com",
  projectId: "bookstore-70c4e",
  storageBucket: "bookstore-70c4e.appspot.com",
  messagingSenderId: "547876872998",
  appId: "1:547876872998:web:0648b73969a52ebbe557e7",
};

// eslint-disable-next-line no-unused-vars
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
