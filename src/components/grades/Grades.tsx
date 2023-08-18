import React from 'react';

import styles from './Grades.module.css';

import { getGradeForSubject } from '../../util/schoolUtil';
import { useRecoilValue } from 'recoil';
import { useChangeGrade } from '../../store/useChangeGrade';

import {
  subjects as subjectsAtom,
  students as studentsAtom,
} from '../../store/atoms';

interface GradesProps {}

const Grades: React.FC<GradesProps> = () => {
  const subjects = useRecoilValue(subjectsAtom);

  const changeGrade = useChangeGrade();
  const students = useRecoilValue(studentsAtom);

  const gradeChangeHandler = (
    studentId: number,
    subjectId: number,
    newGradeValue: number
  ) => {
    changeGrade(studentId, subjectId, newGradeValue);
  };

  const stortedSudents = [...students];
  stortedSudents.sort((a, b) => a.name.localeCompare(b.name));

  // draw UI
  return (
    <div className={styles.container}>
      {/* table head  */}
      <table className={styles.table}>
        <thead>
          <tr>
            {/* <th>Studnet ID</th> */}
            <th>Name</th>
            {subjects.map((subject) => (
              <th key={subject.id}>{subject.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* loop through students */}
          {stortedSudents.map((student) => (
            <tr key={student.id}>
              {/* lables  */}
              {/* <td>{student.id}</td> */}
              <td>{student.name}</td>

              {/* loop through subjects  */}
              {subjects.map((subject) => (
                <td key={subject.id}>
                  <input
                    type='number'
                    value={getGradeForSubject(student.grades, subject.id)}
                    onChange={(e) =>
                      gradeChangeHandler(
                        student.id,
                        subject.id,
                        parseInt(e.target.value, 10)
                      )
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;
