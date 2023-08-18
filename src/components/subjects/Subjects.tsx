import React from 'react';
import styles from './Subjects.module.css';
import {
  subjects as subjectAtom,
  selectedPage as selectedPageAtom,
} from '../../store/atoms';
import { Entry, Subject } from '../../typesAndEnums/entries';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { createSubject } from '../../util/schoolUtil';
import { Page } from '../../typesAndEnums/page';
import SimpleList from '../simpleList/SimpleList';
import AddEntryFrom from '../addEntryFrom/AddEntryFrom';
import useDeleteSubject from '../../store/useDeleteSubject';

interface SubjectsProps {}

const Subjects: React.FC<SubjectsProps> = () => {
  const [subjects, setSujects] = useRecoilState(subjectAtom);
  const setPage = useSetRecoilState(selectedPageAtom);
  const deleteSubject = useDeleteSubject();
  /**
   * subjectRemoveHandler
   * @param subject
   */
  const subjectRemoveHandler = (s: Entry) => {
    const subject = s as Subject;
    deleteSubject(subject);
  };

  /**
   * addStudentHandler
   * @param name
   */
  const addSubjectHandler = (name: string) => {
    const newSubject = createSubject(name);
    const updatedSubjects = [...subjects, newSubject];
    setSujects(updatedSubjects);
  };

  /**
   * studentClickedHandler
   */
  const subjectClickedHandler = () => {
    setPage(Page.Grades);
  };

  return (
    <div className={styles.container}>
      <SimpleList
        entries={subjects}
        onRemoveClick={subjectRemoveHandler}
        onLabelClick={subjectClickedHandler}
      />

      {/* add button */}
      <AddEntryFrom
        addLabel='Add Subject'
        onAddButtonClick={addSubjectHandler}
      />
    </div>
  );
};

export default Subjects;
