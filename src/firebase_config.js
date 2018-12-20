import firebase from 'firebase'
import firebaseui from 'firebaseui'

import '@firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDkazO1kipHFTiG-ydt4o0zXtHWYAj4jxw",
    authDomain: "vineconnect-c67e0.firebaseapp.com",
    databaseURL: "https://vineconnect-c67e0.firebaseio.com",
    projectId: "vineconnect-c67e0",
    storageBucket: "vineconnect-c67e0.appspot.com",
    messagingSenderId: "1047786899543"
  };
  firebase.initializeApp(config);

  export var db = firebase.firestore();
  
  db.settings({
    timestampsInSnapshots: true
  });

export default firebase;