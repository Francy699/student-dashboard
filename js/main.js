// Main shared JS: login handling, guard, small utilities
(function(){
  // Simple client-side login
  document.addEventListener('DOMContentLoaded', ()=>{
    const loginForm = document.getElementById('loginForm');
    if(loginForm){
      loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const user = document.getElementById('username').value.trim();
        const pass = document.getElementById('password').value.trim();
        if(!user || !pass){
          alert('Please fill username and password');
          return;
        }
        // basic format check: username min 3 chars
        if(user.length < 3){ alert('Username too short'); return; }
        // store login flag and redirect
        localStorage.setItem('logged_in', '1');
        localStorage.setItem('student_user', user);
        location.href = 'dashboard.html';
      });
    }

    // Protect pages: allow only when logged_in
    const protectedPages = ['dashboard.html','attendance.html','grades.html','assignments.html','profile.html'];
    const path = location.pathname.split('/').pop();
    if(protectedPages.includes(path)){
      const ok = localStorage.getItem('logged_in');
      if(!ok){ location.href = 'login.html'; }
    }

  });
})();
