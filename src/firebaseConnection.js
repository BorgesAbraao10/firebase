import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbsraoaup1gx-7u5E3_RJw_8TskzqYO-s",
  authDomain: "curso-31d14.firebaseapp.com",
  projectId: "curso-31d14",
  storageBucket: "curso-31d14.appspot.com",
  messagingSenderId: "351450087877",
  appId: "1:351450087877:web:c6899ba26e6e25dc654bac",
  measurementId: "G-49B7BHVGHX",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
