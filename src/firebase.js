import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyDSjDRCwCo3V0sJRHwBcLWCMR23NRUKKOc",
  authDomain: "dcteam-48c2d.firebaseapp.com",
  projectId: "dcteam-48c2d",
  storageBucket: "dcteam-48c2d.appspot.com",
  messagingSenderId: "176026641634",
  appId: "1:176026641634:web:b8be24bf2f04344dd06abb",
  measurementId: "G-03S5ZSMK4J"
};

  firebase.initializeApp(firebaseConfig)
 

  export default firebase