//firebase config key setup 

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getdatabase} from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyA56Y1BF8xhH9Il5uUtvNnZXNRaiGy2NZE",
    authDomain: "pickcodemo1.firebaseapp.com",
    databaseURL: "https://pickcodemo1-default-rtdb.firebaseio.com",
    projectId: "pickcodemo1",
    storageBucket: "pickcodemo1.appspot.com",
    messagingSenderId: "377422977467",
    appId: "1:377422977467:web:8a05940e7a4d5d87838c9e",
    measurementId: "G-07MQVXN1KL"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};