import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase config (same as app.js)
const firebaseConfig = {
  apiKey: "AIzaSyDz8rRQT76Jqe_yVaeUlqrPXGfFuBDIpSE",
  authDomain: "limbda-d7fe1.firebaseapp.com",
  projectId: "limbda-d7fe1",
  storageBucket: "limbda-d7fe1.firebasestorage.app",
  messagingSenderId: "368935926260",
  appId: "1:368935926260:web:2a73898316e72a8ad761a1",
  measurementId: "G-0Q0LD8GHRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch user data and display
async function fetchUserData() {
  const tableBody = document.querySelector('#users-table tbody');
  const querySnapshot = await getDocs(collection(db, "users"));

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = data.name;

    const semCell = document.createElement('td');
    semCell.textContent = data.semester;

    const timeCell = document.createElement('td');
    const timestamp = data.timestamp?.toDate();
    timeCell.textContent = timestamp ? timestamp.toLocaleString() : "N/A";

    row.appendChild(nameCell);
    row.appendChild(semCell);
    row.appendChild(timeCell);
    tableBody.appendChild(row);
  });
}

fetchUserData();
