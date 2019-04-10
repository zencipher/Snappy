import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCa9aLVwEJhnXBPi9xWMZ3B03vmYyF7BRE",
    authDomain: "snappy-tester.firebaseapp.com",
    databaseURL: "https://snappy-tester.firebaseio.com",
    projectId: "snappy-tester",
    storageBucket: "snappy-tester.appspot.com",
    messagingSenderId: "753073239841"
};

firebase.initializeApp(config);