import { useRecoilState } from 'recoil';
import { subjects as subjectsAtom, students as studentsAtom } from './atoms';

import { Subject } from '../typesAndEnums/entries';

export const useDeleteSubject = () => {
  const [students, setStudents] = useRecoilState(studentsAtom);
  const [subjects, setSubjects] = useRecoilState(subjectsAtom);

  const deleteSubject = (subject: Subject) => {
    // first delet the subject
    const updatedSubjects = subjects.filter(
      (listSubject) => listSubject.id !== subject.id
    );
    setSubjects(updatedSubjects);
    // also remove subjects from students grades
    const updatedStudents = students.map((student) => {
      const updatedStudent = { ...student };
      const updatedGrades = updatedStudent.grades.filter(
        (grade) => grade.subjectId !== subject.id
      );
      updatedStudent.grades = updatedGrades;
      return updatedStudent;
    });

    setStudents(updatedStudents);
  };

  return deleteSubject;
};

export default useDeleteSubject;
