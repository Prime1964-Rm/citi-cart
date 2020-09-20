import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCZLp0s4pOe3vyZJpCw8rAfd0kx0RZ-seM",
    authDomain: "citi-cart.firebaseapp.com",
    databaseURL: "https://citi-cart.firebaseio.com",
    projectId: "citi-cart",
    storageBucket: "citi-cart.appspot.com",
    messagingSenderId: "328006726785",
    appId: "1:328006726785:web:821445db633f94910ec980",
    measurementId: "G-3TV1NT8FHR"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;