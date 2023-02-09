import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJXx9-dbMw8OB411XGDW5_DrVKL2W-jt4",
  authDomain: "typemaster-8b132.firebaseapp.com",
  projectId: "typemaster-8b132",
  storageBucket: "typemaster-8b132.appspot.com",
  messagingSenderId: "47403678196",
  appId: "1:47403678196:web:422dffd1b59ffdd09321a1",
  measurementId: "G-785X54SCXQ"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
export {auth,<provider> </provider>}