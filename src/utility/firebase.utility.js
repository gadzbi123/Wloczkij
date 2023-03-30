// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  writeBatch,
} from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzz8c9p2UinhqtptjLdtVIn9pVfmVDq5I",
  authDomain: "wloczkij-1bd42.firebaseapp.com",
  projectId: "wloczkij-1bd42",
  storageBucket: "wloczkij-1bd42.appspot.com",
  messagingSenderId: "317274225016",
  appId: "1:317274225016:web:73e3ec6d56af77f179708d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
export const getCollectionAndDocuments = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.map((docSnapshot) =>
    docSnapshot.data()
  );
  return categoryMap;
};
