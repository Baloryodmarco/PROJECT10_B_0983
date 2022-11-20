import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  //tambahkan firebaseConfig project
  apiKey: "AIzaSyCXXpFB7JHxg-gfsSdj1KQD82lYJCGmhVQ",
  authDomain: "vuefire0898.firebaseapp.com",
  projectId: "vuefire0898",
  storageBucket: "vuefire0898.appspot.com",
  messagingSenderId: "252567588519",
  appId: "1:252567588519:web:4989dab1014d3c76265582",
  measurementId: "G-2Y3C4K3BCL"
}

//tambahkan code untuk menginisialisasikan Firebase
const firebaseApp = initializeApp(firebaseConfig);
//tambahkan code untuk menginisialisasikan Realtime Database 
//dan mendapatkan referensi ke database tersebut
export const db = getDatabase(firebaseApp);
