import React from 'react';

import './App.css';
import { selectedPage as pageAtom } from './store/atoms';

import Navigation from './components/navigation/Navigation';

import { Page } from './typesAndEnums/page';
import Stundents from './components/stundents/Stundents';
import Grades from './components/grades/Grades';
import { useRecoilValue } from 'recoil';
import Subjects from './components/subjects/Subjects';

function App() {
  //const [selectedPage, setSelectedPage] = useRecoilState(pageAtom);
  const selectedPage = useRecoilValue(pageAtom);

  return (
    <div className='App'>
      <Navigation />
      {selectedPage === Page.Students && <Stundents />}

      {selectedPage === Page.Grades && <Grades />}

      {selectedPage === Page.Subjects && <Subjects />}
    </div>
  );
}

export default App;
