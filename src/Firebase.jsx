import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpfAt9FQqnYeXAxord2tsE8AbwAQoiXGk",
    authDomain: "hooks-blog-a081c.firebaseapp.com",
    projectId: "hooks-blog-a081c",
    storageBucket: "hooks-blog-a081c.appspot.com",
    messagingSenderId: "636386987504",
    appId: "1:636386987504:web:4498d03ab34d92af7aa135"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();