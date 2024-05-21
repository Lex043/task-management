// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "task-management-c4822.firebaseapp.com",
    projectId: "task-management-c4822",
    storageBucket: "task-management-c4822.appspot.com",
    messagingSenderId: "796416826543",
    appId: "1:796416826543:web:6b7dd0742f37301bd3485a",
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);
