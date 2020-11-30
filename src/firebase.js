import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyDomuD8BkQEbZfSURXYFaYBn9I9mkwR6qQ",
  authDomain: "clone1-f37c5.firebaseapp.com",
  databaseURL: "https://clone1-f37c5.firebaseio.com",
  projectId: "clone1-f37c5",
  storageBucket: "clone1-f37c5.appspot.com",
  messagingSenderId: "635761648380",
  appId: "1:635761648380:web:ef1e171517b46017a5ad79",
  measurementId: "G-77VRSKHMZ0"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };