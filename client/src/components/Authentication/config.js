import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBV81SfQaxrhhJyItdNmOsyKF5ete8_nAU",
    authDomain: "login-with-2dd02.firebaseapp.com",
    projectId: "login-with-2dd02",
    storageBucket: "login-with-2dd02.appspot.com",
    messagingSenderId: "699339240954",
    appId: "1:699339240954:web:28f6c90444b6e192da6043",
    measurementId: "G-LMKXFDXN2V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }