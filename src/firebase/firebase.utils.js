import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAXoS5ADHL_BqULYJCHXSlleanhLeC6GFQ",
  authDomain: "ecommerce-ae.firebaseapp.com",
  projectId: "ecommerce-ae",
  storageBucket: "ecommerce-ae.appspot.com",
  messagingSenderId: "711098251294",
  appId: "1:711098251294:web:3be2a3aab90c725902d60f",
  measurementId: "G-PHJHCPFXLD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;
