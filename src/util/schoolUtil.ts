import { Grade, Student, Subject } from '../typesAndEnums/entries';

/**
 * getGradeForSubject - returns grade value for array of stundent grades and subject id
 * @param allStudentGrades
 * @param subjectId
 * @returns
 */
export const getGradeForSubject = (
  allStudentGrades: Array<Grade>,
  subjectId: number
): string => {
  const grade = allStudentGrades.find((g) => g.subjectId === subjectId);
  return grade ? `${grade.grade}` : '';
};

/**
 * updateGrade - helper func for below
 * @param allGrades
 * @param subjectId
 * @param newGradeValue
 * @returns
 */
export const updateGradeForSubject = (
  allGrades: Array<Grade>,
  subjectId: number,
  newGradeValue: number | null
): Array<Grade> => {
  //if (allGrades.length === 0) return [];

  let subjectFound = false;

  // update grades
  const newGrades = allGrades
    .map((grade) => {
      if (grade.subjectId === subjectId) {
        subjectFound = true;
        // check if newGradeValue is definied
        if (newGradeValue) {
          return { subjectId: grade.subjectId, grade: newGradeValue };
        } else {
          return null;
        }
      } else {
        return grade;
      }
    })

    // remove null entriesw
    .filter((grade) => grade !== null) as Array<Grade>;

  //add new grade
  if (!subjectFound) {
    newGrades.push({ subjectId, grade: newGradeValue } as Grade);
  }

  // return subjectFound ? newGrades : allGrades;
  return newGrades;
};

/**
 * updateStudentGrade
 * @param students
 * @param studentId
 * @param subjectId
 * @param newGrade
 */
export const updateStudentGrade = (
  students: Array<Student>,
  studentId: number,
  subjectId: number,
  newGradeValue: number
): Array<Student> => {
  let studentFound = false;

  const updatedStundentArray = students.map((student) => {
    if (student.id === studentId) {
      const updatedStudentGrades = updateGradeForSubject(
        student.grades,
        subjectId,
        newGradeValue
      );
      studentFound = true;
      return { ...student, grades: updatedStudentGrades };
    } else {
      return student;
    }
  });

  return studentFound ? updatedStundentArray : students;
};

/**
 * createStudent
 * @param name
 * @returns
 */
export const createStudent = (name: string): Student => {
  const id = Math.floor(Math.random() * 1000000);
  return {
    name,
    id,
    grades: [],
  };
};

/**
 * createSubject
 * @param name
 * @returns
 */
export const createSubject = (name: string): Subject => {
  const id = Math.floor(Math.random() * 1000000);
  return {
    name,
    id,
  };
};
