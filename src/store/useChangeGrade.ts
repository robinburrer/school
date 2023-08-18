import { useSetRecoilState, useRecoilState } from 'recoil';
import { subjects as subjectsAtom, students as studentsAtom } from './atoms';
import {
  getGradeForSubject,
  updateStudentGrade as updateStudentGradeUtil,
} from '../util/schoolUtil';

export const useChangeGrade = () => {
  const [students, setStudents] = useRecoilState(studentsAtom);

  const changeGrade = (
    studentId: number,
    subjectId: number,
    newGradeValue: number
  ) => {
    const udatedStudents = updateStudentGradeUtil(
      students,
      studentId,
      subjectId,
      newGradeValue
    );

    console.log(udatedStudents);

    setStudents(udatedStudents);
  };

  return changeGrade;
};

export default useChangeGrade;
