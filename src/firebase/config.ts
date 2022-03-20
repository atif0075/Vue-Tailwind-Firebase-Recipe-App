import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDtWCkU3DtmtfLQ2QUqgsfQowADaeEgNqc",
  authDomain: "recipe-app-d8254.firebaseapp.com",
  projectId: "recipe-app-d8254",
  storageBucket: "recipe-app-d8254.appspot.com",
  messagingSenderId: "1003507365339",
  appId: "1:1003507365339:web:1132be1b4cf16cd6dfe3fe",
};

initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
