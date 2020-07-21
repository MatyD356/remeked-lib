import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAvFCZfxzMzT_7eJIkjKpyOFdiKP_RKbv0",
  authDomain: "test-e8e2a.firebaseapp.com",
  databaseURL: "https://test-e8e2a.firebaseio.com",
  projectId: "test-e8e2a",
  storageBucket: "test-e8e2a.appspot.com",
  messagingSenderId: "551986845582",
  appId: "1:551986845582:web:89ca97179999d1b13db6df",
  measurementId: "G-P398HFGLMQ"
}

firebase.initializeApp(config);
const database = firebase.database();

export default database;