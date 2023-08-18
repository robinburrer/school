import React from 'react';
import styles from './NavidationItem.module.css';

interface NavidationItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const NavidationItem: React.FC<NavidationItemProps> = ({
  label,
  onClick,
  selected,
}) => {
  return (
    <li
      className={`${styles.item} ${selected ? styles['item--active'] : ''}`}
      onClick={onClick}
    >
      <a href='#'> {label}</a>
    </li>
  );
};

export default NavidationItem;
