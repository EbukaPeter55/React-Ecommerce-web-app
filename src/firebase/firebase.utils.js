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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // If snapshot doesn't exist, create an object user, using the userAuth object
  if(!snapShot.exists){
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
    console.log('error creating user', error.message);
    
  }
  }
  return userRef;
  // console.log(firestore.doc('users/128fdashadu'));
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  // Fire off our batch request
 return await batch.commit();
};

// Get the whole shanpshot
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(
    doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    }
  );

return transformedCollection.reduce((accumulator, collection)=>{
accumulator[collection.title.toLowerCase()] = collection;
return accumulator;
  }, {});
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;