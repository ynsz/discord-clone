import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8QcaCd5pXR688IL4cmMFD5S20MFycdSw",
  authDomain: "dicord-clone-94738.firebaseapp.com",
  projectId: "dicord-clone-94738",
  storageBucket: "dicord-clone-94738.firebasestorage.app",
  messagingSenderId: "32611293990",
  appId: "1:32611293990:web:c3dd554d2d6dd470f03fe7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
export default db;
