import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbq6407AwP8seaHg2uzspFvv-LzhybQsE",
  authDomain: "amaz-2-9655a.firebaseapp.com",
  projectId: "amaz-2-9655a",
  storageBucket: "amaz-2-9655a.appspot.com",
  messagingSenderId: "394776778512",
  appId: "1:394776778512:web:ee1de2c19fd184dcbbb795",
};

//  Initialize the firebase App
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
