// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDgb2tRMhNawvA301n3AsUVKdAusAwUWQ8',
  authDomain: 'urja-87631.firebaseapp.com',
  projectId: 'urja-87631',
  storageBucket: 'urja-87631.appspot.com',
  messagingSenderId: '340969751111',
  appId: '1:340969751111:web:0826ab6e2ce0d7fd6c6762',
  measurementId: 'G-E37E9D4PQC'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
