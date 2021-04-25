import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDTW-dAcZaV8u2iHQXQLcl05g3MMZZ98T0",
  authDomain: "booksanta2-18075.firebaseapp.com",
  projectId: "booksanta2-18075",
  storageBucket: "booksanta2-18075.appspot.com",
  messagingSenderId: "283792433838",
  appId: "1:283792433838:web:abbc29a56ec654dd6ac33f"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
