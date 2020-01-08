import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAVcSaQwD31GIwSBi0LteRefgKfsYFe7yQ",
  authDomain: "ryfit-33fb8.firebaseapp.com",
  databaseURL: "https://ryfit-33fb8.firebaseio.com",
  projectId: "ryfit-33fb8",
  storageBucket: "ryfit-33fb8.appspot.com",
  messagingSenderId: "344003560407",
  appId: "1:344003560407:web:b0d2c654c5bc331e544192",
  measurementId: "G-HQK43DV8FJ"
};
const firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;
