// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtxMJQMwzhZz9QtiHuBlF4L58jRKgI90A",
  authDomain: "highthand-f9bc6.firebaseapp.com",
  projectId: "highthand-f9bc6",
  storageBucket: "highthand-f9bc6.appspot.com",
  messagingSenderId: "60442905889",
  appId: "1:60442905889:web:6d1f9f25a03e0a6a5dc260",
  measurementId: "G-G2CN0QMEJB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
