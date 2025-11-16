// Dashboard rendering
document.addEventListener('DOMContentLoaded', ()=>{
  const data = window.__STUDENT_DATA__;
  // Profile
  document.getElementById('welcome').textContent = `Welcome, ${data.profile.name} 👋`;
  document.getElementById('profileName').textContent = data.profile.name;
  document.getElementById('profileId').textContent = data.profile.id;

  // GPA calc (simple average mapped to 4.0 scale)
  const avgMarks = data.grades.reduce((s,g)=>s+g.marks,0)/data.grades.length;
  const gpa = (avgMarks/25).toFixed(2); // crude map: 100 -> 4.00
  document.getElementById('gpa').textContent = gpa;

  // Attendance pct overall
  const totalPresent = data.attendance.reduce((s,a)=>s+(a.present),0);
  const totalPossible = data.attendance.reduce((s,a)=>s+(a.present+a.absent),0);
  const attendancePct = Math.round((totalPresent/totalPossible)*100);
  document.getElementById('attendancePct').textContent = attendancePct + '%';

  // Assignments completed
  const completed = data.assignments.filter(a=>a.completed).length;
  document.getElementById('assignComp').textContent = `${completed} / ${data.assignments.length}`;

  // Announcements
  const ann = document.getElementById('announcements');
  data.announcements.forEach(a => {
    const li = document.createElement('li'); li.textContent = a; ann.appendChild(li);
  });

  // Progress Chart: show average marks per subject
  const ctx = document.getElementById('progressChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.grades.map(g=>g.subject),
      datasets: [{ label: 'Marks', data: data.grades.map(g=>g.marks) }]
    },
    options: { scales:{y:{beginAtZero:true,max:100}} }
  });

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
    themeBtn.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Logout
  const logoutButtons = document.querySelectorAll('#logoutBtn, #logoutBtn2, #logoutBtn3, #logoutBtn4, #logoutBtn5');
  logoutButtons.forEach(b=>b && b.addEventListener('click', ()=>{
    localStorage.removeItem('logged_in');
    location.href = 'login.html';
  }));
});
