import firebase from "firebase"; 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhanmlFGL4cjpVJ93m7JpOduWe84BaL6Q",
  authDomain: "uber-eats-rn-ba803.firebaseapp.com",
  projectId: "uber-eats-rn-ba803",
  storageBucket: "uber-eats-rn-ba803.appspot.com",
  messagingSenderId: "825063292133",
  appId: "1:825063292133:web:c223f1d5ed318bc1faa80c"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app(); 

export default firebase; 