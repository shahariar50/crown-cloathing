// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPERMlrMTOCF7Z4qgZFpsclhfky_tpCDI",
  authDomain: "crown-db-6d8c7.firebaseapp.com",
  projectId: "crown-db-6d8c7",
  storageBucket: "crown-db-6d8c7.appspot.com",
  messagingSenderId: "359505963707",
  appId: "1:359505963707:web:016b9002c54e47954c579e",
  measurementId: "G-YQ3CMBSFPT",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const usersRef = collection(db, "users");
  const docRef = doc(db, "users", userAuth.uid);
  const docSnep = await getDoc(docRef);

  if (!docSnep.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(doc(usersRef, userAuth.uid), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }

    console.log(displayName, email);
  }
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });
};

export const auth = getAuth();
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

// Initialize Firebase
const analytics = getAnalytics(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default analytics;
