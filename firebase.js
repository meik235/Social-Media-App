import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDA4H6fp9ZadUVG4ohVgR1r8CTLZ7qTGjQ",
  authDomain: "rathetele-online-social-7ac52.firebaseapp.com",
  projectId: "rathetele-online-social-7ac52",
  storageBucket: "rathetele-online-social-7ac52.appspot.com",
  messagingSenderId: "580528863449",
  appId: "1:580528863449:web:7fbf6f8354ad78494ea6c8"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db }