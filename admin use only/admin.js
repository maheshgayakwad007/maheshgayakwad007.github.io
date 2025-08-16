import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

// Your Firebase config here
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

async function loadUserData() {
  const usersTableBody = document.querySelector("#users-table tbody");

  const q = query(collection(db, "users"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const user = doc.data();
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name || "N/A";

    const semCell = document.createElement("td");
    semCell.textContent = user.semester || "N/A";

    const timeCell = document.createElement("td");
    const date = user.timestamp ? user.timestamp.toDate() : null;
    timeCell.textContent = date ? date.toLocaleString() : "N/A";

    row.appendChild(nameCell);
    row.appendChild(semCell);
    row.appendChild(timeCell);

    usersTableBody.appendChild(row);
  });
}

// Call loadUserData immediately (or after removing password check)
loadUserData();
