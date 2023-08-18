// Import the function to be tested
import { updateGradeForSubject, updateStudentGrade } from './schoolUtil';

// Sample test data
const sampleGrades = [
  { subjectId: 1, grade: 85 },
  { subjectId: 2, grade: 90 },
  { subjectId: 3, grade: 78 },
];

const sampleStudents = [
  {
    id: 1,
    name: 'John',
    grades: [
      { subjectId: 1, grade: 85 },
      { subjectId: 2, grade: 90 },
    ],
  },
  {
    id: 2,
    name: 'Rob',
    grades: [
      { subjectId: 1, grade: 78 },
      { subjectId: 2, grade: 88 },
    ],
  },
];

// UPDATE GRADE FOR SUBJECT
describe('updateGradeForSubject', () => {
  it('should update the grade for a specific subject', () => {
    const updatedGrades = updateGradeForSubject(sampleGrades, 2, 95);
    expect(updatedGrades).toEqual([
      { subjectId: 1, grade: 85 },
      { subjectId: 2, grade: 95 },
      { subjectId: 3, grade: 78 },
    ]);
  });

  it('should delete grade entry when grade is empty', () => {
    const updatedGrades = updateGradeForSubject(sampleGrades, 3, null);
    expect(updatedGrades.length).toBe(2);
  });

  it('should add grade when allGrades is an empty array', () => {
    const updatedGrades = updateGradeForSubject([], 3, 66);
    expect(updatedGrades.length).toBe(1);
  });
});

// UPDATESTUDENTGRADE
describe('updateStudentGrade', () => {
  it('should update the grade for a specific student and subject', () => {
    const updatedStudents = updateStudentGrade(sampleStudents, 1, 2, 95);
    expect(updatedStudents).toEqual([
      {
        id: 1,
        name: 'John',
        grades: [
          { subjectId: 1, grade: 85 },
          { subjectId: 2, grade: 95 },
        ],
      },
      {
        id: 2,
        name: 'Rob',
        grades: [
          { subjectId: 1, grade: 78 },
          { subjectId: 2, grade: 88 },
        ],
      },
    ]);
  });

  it('should not modify grades for other students', () => {
    const updatedStudents = updateStudentGrade(sampleStudents, 1, 2, 95);
    expect(updatedStudents[1]).toBe(sampleStudents[1]);
  });

  it('should not modify other subjects for the same student', () => {
    const updatedStudents = updateStudentGrade(sampleStudents, 1, 2, 95);
    expect(updatedStudents[0].grades[0]).toBe(sampleStudents[0].grades[0]);
  });

  it('should handle an empty array of students', () => {
    const updatedStudents = updateStudentGrade([], 1, 1, 85);
    expect(updatedStudents).toEqual([]);
  });
});
