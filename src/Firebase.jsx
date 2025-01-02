import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeg9M0mME6p9bh73BVUSYLrK8KPqS3J1w",
  authDomain: "portfolio-90340.firebaseapp.com",
  projectId: "portfolio-90340",
  storageBucket: "portfolio-90340.firebasestorage.app",
  messagingSenderId: "972023833232",
  appId: "1:972023833232:web:9e64a2b555e18d8f166e15",
  measurementId: "G-R2K1B2XGEQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
