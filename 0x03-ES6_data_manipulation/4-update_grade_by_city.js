export default function updateStudentGradeByCity(students, city, newgrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      // finding new grade for current student
      // whose studentId matches the id of current student
      const newGrades = newgrades.find((grade) => grade.studentId === student.id);
      const grade = newGrades ? newGrades.grade : 'N/A';

      return { ...student, grade };
    });
}
