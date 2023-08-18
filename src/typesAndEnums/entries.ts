export interface Entry {
  id: number;
  name: string;
}

export interface Grade {
  subjectId: number;
  grade: number;
}

export interface Subject extends Entry {}

export interface Student extends Entry {
  grades: Array<Grade>;
}
