import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAoIHQcn8fCUy_b91aDSY7ogo4k29gYaRg",
  authDomain: "vuefire0983.firebaseapp.com",
  databaseURL: "https://vuefire0983-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vuefire0983",
  storageBucket: "vuefire0983.appspot.com",
  messagingSenderId: "808345428638",
  appId: "1:808345428638:web:f6923982ae9fa89c96d18f"
}

//tambahkan code untuk menginisialisasikan Firebase
const firebaseApp = initializeApp(firebaseConfig);
//tambahkan code untuk menginisialisasikan Realtime Database 
//dan mendapatkan referensi ke database tersebut
export const db = getDatabase(firebaseApp);
