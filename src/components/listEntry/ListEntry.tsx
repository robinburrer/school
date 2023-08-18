import React from 'react';
import styles from './ListEntry.module.css';

interface ListEntryProps {
  label: string;
  onRemoveClick: () => void;
  onLabelClick: () => void;
}

const ListEntry: React.FC<ListEntryProps> = ({
  label,
  onRemoveClick,
  onLabelClick,
}) => {
  return (
    <li className={styles.container}>
      <p className={styles.label} onClick={onLabelClick}>
        {' '}
        {label}
      </p>
      <button onClick={onRemoveClick} className={styles.button}>
        Delete
      </button>
    </li>
  );
};

export default ListEntry;
