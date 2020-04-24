
const classA= [
  {
    name: "Jadson",
    grade: 7

  },
  {
    name: "Mariana",
    grade: 2

  },
  {
    name: "Julio",
    grade: 4.5
  },
  {
    name: "Denis",
    grade: 1
  },
  {
    name: "Marcos",
    grade: 8
  }
]

const classB = [
  {
    name: "Jose",
    grade: 0
  },
  {
    name: "MarTiburtiana",
    grade: 4
  },
  {
    name: "Bromelio",
    grade: 2
  },
  {
    name: "Debora",
    grade: 7.8
  },
  {
    name: "Debora",
    grade: 2
  },
  {
    name: "Debora",
    grade: 5
  }
]

function calculateAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }
  const average = sum / students.length;
  console.log(`The sum of grades is: ${sum}`);
}

function sendmessage(average, turma) {
  if (average > 5) {
    console.log(`The average of the class ${turma} is ${average}. Congrett!!`);
  } else {
    console.log(`The average of the class ${turma}. Isn't good enogth.`);
  }
}

const average1 = calculateAverage(classA);

function markFlunked(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function messageFlunked(student) {
  if (student.flunked) {
    console.log(`The student ${student.name} are flunked!`);
  }
}

function studentsFlunkeds(students) {
  for (let student of students) {
    markFlunked(student);
    messageFlunked(student);
  }
}

messageFlunked(classA);
messageFlunked(classB);

studentsFlunkeds(classA);
studentsFlunkeds(classB);
