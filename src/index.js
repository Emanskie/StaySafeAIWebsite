// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYgMIcVn0yp5JHvUpgsW04MmX1zABcoHg",
  authDomain: "staysafe-ai.firebaseapp.com",
  databaseURL: "https://staysafe-ai-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "staysafe-ai",
  storageBucket: "staysafe-ai.appspot.com",
  messagingSenderId: "256408927004",
  appId: "1:256408927004:web:11de081a43a7266a2958d9",
  measurementId: "G-YQ8BFZP4FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)