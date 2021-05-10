import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA0ZU23KI4dhfMLoUssGxvszG_37TDelnY",
  authDomain: "fb-crud-react-9007a.firebaseapp.com",
  databaseURL: "https://fb-crud-react-9007a.firebaseio.com",
  projectId: "fb-crud-react-9007a",
  storageBucket: "fb-crud-react-9007a.appspot.com",
  messagingSenderId: "461268614220",
  appId: "1:461268614220:web:f42a5b3a34dd20c4d608e9"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)