import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtv_rZ4F7dI3b8JkeIpH1tjZGUGfAnaQ0",
  authDomain: "ecommerce-5b230.firebaseapp.com",
  projectId: "ecommerce-5b230",
  storageBucket: "ecommerce-5b230.firebasestorage.app",
  messagingSenderId: "760135512801",
  appId: "1:760135512801:web:a0711a3f3e5ac3ed553da0",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
