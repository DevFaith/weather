// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1lYAEkCXhMGjGg55ANlTkdfAI0zUJzbo",
    authDomain: "weather-app-w.firebaseapp.com",
    projectId: "weather-app-w",
    storageBucket: "weather-app-w.appspot.com",
    messagingSenderId: "431392398548",
    appId: "1:431392398548:web:0d2c553f7dd67173612f41",
    measurementId: "G-47X7F14F18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const LogEvent = (name, params) => logEvent(analytics, name, params)