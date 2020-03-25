import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCucttw5P0fC5u0s5PMsPqGavg_1DBWV3E",
  authDomain: "tenedores-54321.firebaseapp.com",
  databaseURL: "https://tenedores-54321.firebaseio.com",
  projectId: "tenedores-54321",
  storageBucket: "tenedores-54321.appspot.com",
  messagingSenderId: "5295289989",
  appId: "1:5295289989:web:50de402f3f1fbc56d85bec"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCucttw5P0fC5u0s5PMsPqGavg_1DBWV3E",
//     authDomain: "tenedores-54321.firebaseapp.com",
//     databaseURL: "https://tenedores-54321.firebaseio.com",
//     projectId: "tenedores-54321",
//     storageBucket: "tenedores-54321.appspot.com",
//     messagingSenderId: "5295289989",
//     appId: "1:5295289989:web:50de402f3f1fbc56d85bec"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>