
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCuON6e-68-x0gK26e71hapmiNM0HZqkgI",
  authDomain: "speech-to-text-app-805fc.firebaseapp.com",
  projectId: "speech-to-text-app-805fc",
  storageBucket: "speech-to-text-app-805fc.firebasestorage.app",
  messagingSenderId: "765706886456",
  appId: "1:765706886456:web:220a59bacd6ba12f1f35cd",
  measurementId: "G-YY9SPFZJDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Configure Google Auth Provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
