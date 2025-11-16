// Simulated student data and persistence
(function(){
  const defaultData = {
    profile: { name: 'Tejasri', id: 'STU-0001', email: 'tejasri@example.com', department: 'Computer Science' },
    attendance: [
      {subject:'Maths', present:34, absent:6},
      {subject:'Physics', present:28, absent:12},
      {subject:'Chemistry', present:38, absent:2},
      {subject:'English', present:30, absent:10}
    ],
    grades: [
      {subject:'Maths', marks:88},
      {subject:'Physics', marks:74},
      {subject:'Chemistry', marks:92},
      {subject:'English', marks:81}
    ],
    assignments: [
      {title:'Algebra Worksheet', subject:'Maths', due:'2025-11-20', completed:false},
      {title:'Physics Lab Report', subject:'Physics', due:'2025-11-18', completed:false},
      {title:'Chemistry Research', subject:'Chemistry', due:'2025-11-25', completed:true}
    ],
    announcements: [
      'Semester break starts Dec 20, 2025',
      'New library timings from Nov 10, 2025',
      'Guest lecture on AI Ethics — Nov 30, 2025'
    ]
  };

  // Load from localStorage if exists
  const stored = localStorage.getItem('student_data');
  const data = stored ? JSON.parse(stored) : defaultData;
  // write back to storage to ensure consistent object reference
  localStorage.setItem('student_data', JSON.stringify(data));
  window.__STUDENT_DATA__ = data;
})();
