
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFuvuqzQq9sCPPrYQFRnzGy82L6qvoJkw",
  authDomain: "savy-f5da7.firebaseapp.com",
  projectId: "savy-f5da7",
  storageBucket: "savy-f5da7.firebasestorage.app",
  messagingSenderId: "195496009554",
  appId: "1:195496009554:web:e1695199c309cdbcfbe48b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
