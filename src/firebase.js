// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2qA1e7N80G1N-UEsyapQfDXdCtVG_DyU",
  authDomain: "smgj-member-registration.firebaseapp.com",
  projectId: "smgj-member-registration",
  storageBucket: "smgj-member-registration.firebasestorage.app",
  messagingSenderId: "568594694961",
  appId: "1:568594694961:web:51800131de46122b382610"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
