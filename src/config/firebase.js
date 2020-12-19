import * as firebase from 'firebase'
import 'firebase/database' //we tell which service we are using like in js
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA-b-z-mU-VuNP6x6tL0-GTG7fIaS7qwg4",
    authDomain: "saylaniform-a00ab.firebaseapp.com",
    databaseURL: "https://saylaniform-a00ab.firebaseio.com",
    projectId: "saylaniform-a00ab",
    storageBucket: "saylaniform-a00ab.appspot.com",
    messagingSenderId: "999587971214",
    appId: "1:999587971214:web:fe0723932603adf95a09df",
    measurementId: "G-6SZ4TVLVEP"
  };
   // Initialize Firebase
   export default firebase.initializeApp(firebaseConfig); //explicitly add export default