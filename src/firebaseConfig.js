
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCcjt68AWNNV7--xx4dsahy8e66mdC1EBs",
  authDomain: "electra-vote-a145b.firebaseapp.com",
  projectId: "electra-vote-a145b",
  storageBucket: "electra-vote-a145b.firebasestorage.app",
  messagingSenderId: "1039830084302",
  appId: "1:1039830084302:web:020a8bde15ec282a517e9f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export { db };