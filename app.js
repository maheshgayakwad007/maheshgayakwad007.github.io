// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your Firebase config — replace with your config if needed
const firebaseConfig = {
  apiKey: "AIzaSyDz8rRQT76Jqe_yVaeUlqrPXGfFuBDIpSE",
  authDomain: "limbda-d7fe1.firebaseapp.com",
  projectId: "limbda-d7fe1",
  storageBucket: "limbda-d7fe1.appspot.com",
  messagingSenderId: "368935926260",
  appId: "1:368935926260:web:2a73898316e72a8ad761a1",
  measurementId: "G-0Q0LD8GHRP"
};


// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export this function to save user data to Firestore
export async function saveUserData(name, semester) {
  try {
    await addDoc(collection(db, "users"), {
      name: name,
      semester: semester,
      timestamp: serverTimestamp()
    });
    alert("User info saved successfully!");
  } catch (error) {
    console.error("Error saving user info: ", error);
    alert("Failed to save data, please try again.");
  }
}
