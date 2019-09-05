import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDZNgX16asnU299wR8A7wUvV3j0tidSZJc",
  authDomain: "crown-db-ec3e4.firebaseapp.com",
  databaseURL: "https://crown-db-ec3e4.firebaseio.com",
  projectId: "crown-db-ec3e4",
  storageBucket: "",
  messagingSenderId: "612914345952",
  appId: "1:612914345952:web:68e65086c5a5002237dd85"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;