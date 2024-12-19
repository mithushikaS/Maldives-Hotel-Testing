// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEmM7oO83mgqSakhpwojIsJPtVq6jfEoA",
  authDomain: "maldives-fe93b.firebaseapp.com",
  projectId: "maldives-fe93b",
  storageBucket: "maldives-fe93b.firebasestorage.app",
  messagingSenderId: "58611346290",
  appId: "1:58611346290:web:f3b5f863a5a446042d4beb",
  measurementId: "G-G76ZL74J6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = getFirestore(app);

export { db };
