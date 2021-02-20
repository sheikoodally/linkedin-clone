import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZuz8m4pm9YhW7AWlcXBfD5181c8rvyBU",
    authDomain: "linkedin-clone-so.firebaseapp.com",
    projectId: "linkedin-clone-so",
    storageBucket: "linkedin-clone-so.appspot.com",
    messagingSenderId: "55170326443",
    appId: "1:55170326443:web:42033882e418aef281fcee",
    measurementId: "G-Z9VTKPEMEQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};