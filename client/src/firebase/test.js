import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// QUERY FIRSTORE DATABASE
firestore.collection('users').doc('SkrY8PF5KTXbEJltunXE').collection('cartItems').doc('fdA47iKJXAvY2iatwl4W');
// ALTERNATIVELY
firestore.doc('/users/SkrY8PF5KTXbEJltunXE/cartItems/fdA47iKJXAvY2iatwl4W'); 
// ALTERNATIVELY TO GET JUST THE CART ITEMS
firestore.collection('/users/SkrY8PF5KTXbEJltunXE/cartItems'); 
