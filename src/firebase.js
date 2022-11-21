// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAI8sHfXH-Q2MuGuttkTJhqrlmXUZ4K2mo',
  authDomain: 'tiktok-ui-a73c0.firebaseapp.com',
  projectId: 'tiktok-ui-a73c0',
  storageBucket: 'tiktok-ui-a73c0.appspot.com',
  messagingSenderId: '227716753423',
  appId: '1:227716753423:web:9840542447e5c831449b7a',
  measurementId: 'G-5PP1YZKHX4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
