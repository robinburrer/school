import React from 'react';
import styles from './Stundents.module.css';
import {
  students as studentsAtom,
  selectedPage as selectedPageAtom,
} from '../../store/atoms';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Entry, Student } from '../../typesAndEnums/entries';
import AddEntryFrom from '../addEntryFrom/AddEntryFrom';
import { createStudent } from '../../util/schoolUtil';
import { Page } from '../../typesAndEnums/page';
import SimpleList from '../simpleList/SimpleList';

interface StundentsProps {}

const Stundents: React.FC<StundentsProps> = () => {
  const [students, setStudents] = useRecoilState(studentsAtom);
  const setPage = useSetRecoilState(selectedPageAtom);

  /**
   * studentRemoveHandler
   * @param student
   */
  const studentRemoveHandler = (s: Entry) => {
    const student = s as Student;
    const updatedStundents = students.filter(
      (listStudent) => listStudent.id !== student.id
    );
    setStudents(updatedStundents);
  };

  /**
   * addStudentHandler
   * @param name
   */
  const addStudentHandler = (name: string) => {
    const newStunent = createStudent(name);
    const updatedStudents = [...students, newStunent];
    setStudents(updatedStudents);
  };

  /**
   * studentClickedHandler
   */
  const studentClickedHandler = () => {
    setPage(Page.Grades);
  };

  return (
    <div className={styles.container}>
      <SimpleList
        entries={students}
        onRemoveClick={studentRemoveHandler}
        onLabelClick={studentClickedHandler}
      />

      {/* add button */}
      <AddEntryFrom
        addLabel='Add Student'
        onAddButtonClick={addStudentHandler}
      />
    </div>
  );
};

export default Stundents;
