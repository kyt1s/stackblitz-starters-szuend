
const students = [
  { name: "John", chemistryMarks: 85, biologyMarks: 90, dob: "15-02-2001" },
  { name: "Jane", chemistryMarks: 80, biologyMarks: 95, dob: "18-07-2000" },
  { name: "Adam", chemistryMarks: 90, biologyMarks: 85, dob: "10-12-2002" },
  
];


function sortStudents(a, b) {
  if (a.chemistryMarks + a.biologyMarks !== b.chemistryMarks + b.biologyMarks) {
    return (b.chemistryMarks + b.biologyMarks) - (a.chemistryMarks + a.biologyMarks);
  } else if (a.biologyMarks !== b.biologyMarks) {
    return b.biologyMarks - a.biologyMarks;
  } else {
    
    const dateA = new Date(a.dob.split("-").reverse().join("-"));
    const dateB = new Date(b.dob.split("-").reverse().join("-"));
    return dateA - dateB;
  }
}


students.sort(sortStudents);


console.log(students);
