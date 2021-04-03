import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyDMoQsv-ehSJgUk-5bvpPKLBiTpshB4x_I",
        authDomain: "react-ecommerce-ba728.firebaseapp.com",
        projectId: "react-ecommerce-ba728",
        storageBucket: "react-ecommerce-ba728.appspot.com",
        messagingSenderId: "1053733850031",
        appId: "1:1053733850031:web:2e7707a6a38909574f3d5a"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;