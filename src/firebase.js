import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhT2Q7bjRlq3X99lWWIOY4yHEwE2kgQdc",
    authDomain: "e-clone-7b52f.firebaseapp.com",
    projectId: "e-clone-7b52f",
    storageBucket: "e-clone-7b52f.appspot.com",
    messagingSenderId: "359491671118",
    appId: "1:359491671118:web:111ba36ad1b17cf07edf1f",
    measurementId: "G-ZG38H34G4T"
});

const auth = firebase.auth();

export{ auth};
export default firebase