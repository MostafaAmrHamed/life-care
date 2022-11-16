import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAN8ZWYU--a904PyY-EezfDPdItubS7PAY",
  authDomain: "life-care-8c458.firebaseapp.com",
  projectId: "life-care-8c458",
  storageBucket: "life-care-8c458.appspot.com",
  messagingSenderId: "165211922281",
  appId: "1:165211922281:web:979d1129cc21df82db67f8",
  measurementId: "G-CP7J0LCHY0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/*
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUKECT,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
*/
