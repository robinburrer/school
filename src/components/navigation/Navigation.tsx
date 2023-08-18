import React from 'react';
import styles from './Navigation.module.css';
import { Page } from '../../typesAndEnums/page';
import NavidationItem from '../navidationItem/NavidationItem';
import { selectedPage as pageAtom } from '../../store/atoms';
import { useRecoilState } from 'recoil';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const [selectedPage, setSelectedPage] = useRecoilState(pageAtom);

  const naviItemClickHandler = (page: Page) => {
    setSelectedPage(page);
  };

  const pages = Object.values(Page);
  return (
    <div className={styles.container}>
      <ul>
        {pages.map((page, index) => (
          <NavidationItem
            key={index}
            label={page}
            selected={selectedPage === page}
            onClick={() => naviItemClickHandler(page)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
