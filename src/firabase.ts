import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsTRq1GSjgzEo88xxSxAcWZruu8GAAm8",
  authDomain: "reactpractice-84ec7.firebaseapp.com",
  databaseURL: "https://reactpractice-84ec7-default-rtdb.firebaseio.com",
  projectId: "reactpractice-84ec7",
  storageBucket: "reactpractice-84ec7.appspot.com",
  messagingSenderId: "20352115019",
  appId: "1:20352115019:web:196a39f76d746f0bfc48ce",
};

const db = firebase.initializeApp(firebaseConfig).firestore();

export default db;
