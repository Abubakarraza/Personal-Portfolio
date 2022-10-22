// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAijivrhgTGUuHTIcz4vthOyQ_-KZ5CI1k',
  authDomain: 'personal-portfolio-25020.firebaseapp.com',
  projectId: 'personal-portfolio-25020',
  storageBucket: 'personal-portfolio-25020.appspot.com',
  messagingSenderId: '43997474364',
  appId: '1:43997474364:web:dbf78d430496c3a19d5d39',
  measurementId: 'G-3J88H4C9H7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
