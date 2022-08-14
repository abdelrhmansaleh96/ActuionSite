import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHOr6mJYlraZ9UMTAYj_5AwYlLR6yfwjw",
  authDomain: "auctions-b42d7.firebaseapp.com",
  projectId: "auctions-b42d7",
  storageBucket: "auctions-b42d7.appspot.com",
  messagingSenderId: "78368393263",
  appId: "1:78368393263:web:5033ac28a28e6f245d1eda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
