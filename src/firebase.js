// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzfspcOjI8KU0BAAHlKZq-hxw95NYwUas",
  authDomain: "disneyplus-clone-ffe9d.firebaseapp.com",
  projectId: "disneyplus-clone-ffe9d",
  storageBucket: "disneyplus-clone-ffe9d.appspot.com",
  messagingSenderId: "1042616065721",
  appId: "1:1042616065721:web:bdfa1c131c5be2ceb0c568",
  measurementId: "G-Y4S7L18MYD",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
