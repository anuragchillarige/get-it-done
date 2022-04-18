import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyARFTyodrk6vLNZd1SdTEKzh6antQEnym4",

  authDomain: "get-it-done-fe467.firebaseapp.com",

  projectId: "get-it-done-fe467",

  storageBucket: "get-it-done-fe467.appspot.com",

  messagingSenderId: "20545393967",

  appId: "1:20545393967:web:95cbdbc96aef13a0527dda",

  measurementId: "G-4LBS3BHBN2"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;