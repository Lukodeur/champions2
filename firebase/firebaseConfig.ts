// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Remplace ces valeurs par celles de ton projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfxce3BRf7_pw-novfH1zfVlHVy-yhbz8",
  authDomain: "champions-appproject2.firebaseapp.com",
  projectId: "champions-appproject2",
  storageBucket: "champions-appproject2.appspot.com",
  messagingSenderId: "1086131363811",
  appId: "1:1086131363811:web:8ecd91d49b9c8ab2918ad6"
};

// Initialise l'application Firebase
const app = initializeApp(firebaseConfig);

// Exporte Firestore
const db = getFirestore(app);

// Exporte Storage pour les uploads de fichiers (images, etc.)
const storage = getStorage(app);

export { app, db, storage };
