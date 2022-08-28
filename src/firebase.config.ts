import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAH-Iy2gjZN_XaZ9QTOrQPeNxjE7K3Z4-4",
  authDomain: "resturantapp83.firebaseapp.com",
  databaseURL: "https://resturantapp83-default-rtdb.firebaseio.com",
  projectId: "resturantapp83",
  storageBucket: "resturantapp83.appspot.com",
  messagingSenderId: "514582585136",
  appId: "1:514582585136:web:10f904dcb63f62ae8ff2f5",
  measurementId: "G-Q0RNF44E4C"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };