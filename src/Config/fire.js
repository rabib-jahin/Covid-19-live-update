import firebase from './node_modules/firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBPOcr0BeMSGtSNHUxmNP2nAD5nUzMRhp8",
    authDomain: "my-app-b124c.firebaseapp.com",
    databaseURL: "https://my-app-b124c.firebaseio.com",
    projectId: "my-app-b124c",
    storageBucket: "my-app-b124c.appspot.com",
    messagingSenderId: "44249475841",
    appId: "1:44249475841:web:35d0993e3ab16f179b4900",
    measurementId: "G-X11YL54RPY"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;