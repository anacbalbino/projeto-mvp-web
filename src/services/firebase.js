// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDtrZVBadeevua-0MHnrqvV862Iv8QN4NU",
  authDomain: "projeto-mvp-web-fb94e.firebaseapp.com",
  projectId: "projeto-mvp-web-fb94e",
  storageBucket: "projeto-mvp-web-fb94e.appspot.com",
  messagingSenderId: "945418822283",
  appId: "1:945418822283:web:c504787755cdf5c0686a8e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp