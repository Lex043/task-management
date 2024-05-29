import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "task-management-c4822.firebaseapp.com",
    projectId: "task-management-c4822",
    storageBucket: "task-management-c4822.appspot.com",
    messagingSenderId: "796416826543",
    appId: "1:796416826543:web:6b7dd0742f37301bd3485a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
