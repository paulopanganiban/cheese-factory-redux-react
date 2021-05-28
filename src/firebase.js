import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAkyNyj0Y_B1A84NuIWMNpmRNCBZzeG4lU",
    authDomain: "cheese-factory-1d829.firebaseapp.com",
    projectId: "cheese-factory-1d829",
    storageBucket: "cheese-factory-1d829.appspot.com",
    messagingSenderId: "56726174975",
    appId: "1:56726174975:web:66b956ffec7982f071a0ca",
    measurementId: "G-M7MCVBB7CG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider }