// import { initializeApp } from "firebase/app";

// import  "firebase/compat/auth";
// import { getFirestore } from "firebase/firestore";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getDoc } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";




  // const firebaseConfig = {
  //   apiKey: "AIzaSyB3JERIvY_3MblKMgDWv3vLJODfBdXu4lI",
  //   authDomain: "priya-netflix-four.firebaseapp.com",
  //   projectId: "priya-netflix-four",
  //   storageBucket: "priya-netflix-four.appspot.com",
  //   messagingSenderId: "492771649842",
  //   appId: "1:492771649842:web:a8ab1e9db40e112deacf2b"
  // };

// const firebaseConfig = {
//     apiKey: "AIzaSyBQ5IhkgIAb6QtUf2mnxug22_XHtpoaXfA",
//     authDomain: "priya-netflixtwo-clone.firebaseapp.com",
//     projectId: "priya-netflixtwo-clone",
//     storageBucket: "priya-netflixtwo-clone.appspot.com",
//     messagingSenderId: "679114579155",
//     appId: "1:679114579155:web:59be8f65b97dbe299e0826"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBFgYa8R_lx9kNhyYA5iKZuEUedj05482Y",
  authDomain: "netflix-five.firebaseapp.com",
  projectId: "netflix-five",
  storageBucket: "netflix-five.appspot.com",
  messagingSenderId: "668706231206",
  appId: "1:668706231206:web:0830866d447b89454a7567"
};  



const firebaseApp = initializeApp(firebaseConfig);


export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth= app.auth();
// export const db = getFirestore(app)
// firebase.initializeApp(firebaseConfig)
// export const auth = firebase.auth();


// const docRef = firebase.firestore().doc();