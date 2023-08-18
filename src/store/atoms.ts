import { atom } from 'recoil';
import { Page } from '../typesAndEnums/page';
import { createStudent } from '../util/schoolUtil';

// singel enum value for current page
export const selectedPage = atom({
  key: 'selectedPage',
  default: Page.Students,
});

// list of subjectVOs
export const subjects = atom({
  key: 'subjects',
  default: [
    { name: 'Math', id: 1 },
    { name: 'German', id: 2 },
    { name: 'Literature', id: 3 },
  ],
});

// list of sudentVOs
export const students = atom({
  key: 'students',
  default: [
    {
      ...createStudent('Tom'),
      grades: [
        { subjectId: 1, grade: 1 },
        { subjectId: 2, grade: 1 },
      ],
    },
    {
      ...createStudent('Jane'),
      grades: [
        { subjectId: 1, grade: 3 },
        { subjectId: 2, grade: 4 },
      ],
    },
    { ...createStudent('Lara'), grades: [{ subjectId: 3, grade: 2 }] },
  ],
});
