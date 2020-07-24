import firebase from 'firebase'
import { v4 as uuid } from 'uuid';

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

export const addTaskToFirebase = (task) => {
  const id = uuid()
  database.ref(`/${id}`).set({
    task: task.name,
    author: task.author,
    length: task.length,
    status: task.status,
    id
  })
}

export const removeTaskFromFirebase = (id) => {
  database.ref(`/${id}`).remove()
}

export const changeStatusFromFirebase = (id, status) => {
  database.ref(`/${id}`).update({
    status: status === "Yes" ? "No" : "Yes"
  })
}

export default database;