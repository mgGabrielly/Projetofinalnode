
const firebase = require('firebase/app');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectID: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
}; 

//Inicializar App Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(app);

module.exports = app;