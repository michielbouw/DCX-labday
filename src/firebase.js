import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';
import Vue from 'vue';

const firebaseConfig = {
  apiKey: "AIzaSyCSvMEykAIwqEZzWYzL-o-Y6RZsKBRj0SA",
  authDomain: "amazing-environment.firebaseapp.com",
  projectId: "amazing-environment",
  messagingSenderId: "234750802733",
  appId: "1:234750802733:web:fc546f6717fcf0db"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;

// firebase utils
const db = firebase.firestore();

// firebase collections
const foodCollection = db.collection('food');

export {
  db,
  foodCollection
};
