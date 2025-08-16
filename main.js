import { saveUserData } from './app.js';

window.goToDashboard = async function() {
  const name = document.getElementById('name').value.trim();
  const semesterSelect = document.getElementById('semester-select').value;

  if (!name || !semesterSelect) {
    alert('Please enter both name and semester');
    return;
  }

  await saveUserData(name, semesterSelect.replace('sem', ''));

  localStorage.setItem("studentName", name);
  localStorage.setItem("studentSemester", semesterSelect.replace('sem', ''));

  window.location.href = `dashboard-${semesterSelect}.html`;
}
