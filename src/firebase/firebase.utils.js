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

export const createUserProfileDocument = async (userAuth, additionaldata) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaldata,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;
