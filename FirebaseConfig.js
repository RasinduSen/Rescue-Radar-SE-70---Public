import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "process.env.EXPO_PUBLIC_GOOGLE_API_KEY",
    authDomain: "rescue-radar-fc390.firebaseapp.com",
    projectId: "rescue-radar-fc390",
    storageBucket: "rescue-radar-fc390.appspot.com",
    messagingSenderId: "802351998266",
    appId: "1:802351998266:web:8c070fc71478be0df95c03"
  };
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const FIREBASE_AUTH = getAuth(app);
  
  export { storage, app ,FIREBASE_AUTH};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
