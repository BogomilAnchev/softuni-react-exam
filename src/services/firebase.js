import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyAXlhk_tqZeTzWvWFhbWWjHpx1RjElaEEk",
   authDomain: "angular-exam-bea50.firebaseapp.com",
   projectId: "angular-exam-bea50",
   storageBucket: "angular-exam-bea50.appspot.com",
   messagingSenderId: "356341360116",
   appId: "1:356341360116:web:f62528b7b03b85f94a05a1",
};

firebase.initializeApp(firebaseConfig);

export default firebase
