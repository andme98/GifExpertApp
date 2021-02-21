import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4OVOpLOIxFxTNhNaEQ-ZEXxfiRIUldPo",
    authDomain: "gifexpertappdemo.firebaseapp.com",
    projectId: "gifexpertappdemo",
    storageBucket: "gifexpertappdemo.appspot.com",
    messagingSenderId: "581989471583",
    appId: "1:581989471583:web:4d131db0a95e03a9aa12ea",
    measurementId: "G-QMT9M3KSJY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  console.log('Firebase configurado')

  export default firebase.firestore();