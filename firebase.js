import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyARcj4OCzA9X7jFzgvPAw_2SrfIi4BCAp8",
    authDomain: "docs-clone-2b443.firebaseapp.com",
    projectId: "docs-clone-2b443",
    storageBucket: "docs-clone-2b443.appspot.com",
    messagingSenderId: "36817195907",
    appId: "1:36817195907:web:c996a45e17bcf7d98b1cb6",
    measurementId: "G-0DCKYTBE4S"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore();

  export { db };