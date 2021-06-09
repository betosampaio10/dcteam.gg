import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyBB9b9tNzVOAWqNdXVgVPnx_wg9RlNswBs",
    authDomain: "dcteam-6f065.firebaseapp.com",
    projectId: "dcteam-6f065",
    storageBucket: "dcteam-6f065.appspot.com",
    messagingSenderId: "1016428840669",
    appId: "1:1016428840669:web:d0d4b08f55e7347b8bfd34",
    measurementId: "G-C7QVRWF0LP"
  };

  firebase.initializeApp(firebaseConfig)
 

  export default firebase