import React from 'react';
import styles from './SimpleList.module.css';
import { Entry } from '../../typesAndEnums/entries';
import ListEntry from '../listEntry/ListEntry';

interface SimpleListProps {
  entries: Array<Entry>;
  onRemoveClick: (entry: Entry) => void;
  onLabelClick: () => void;
}

const SimpleList: React.FC<SimpleListProps> = ({
  entries,
  onRemoveClick,
  onLabelClick,
}) => {
  const sortedEntries = [...entries];
  sortedEntries.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul className={styles.container}>
      {sortedEntries.map((entry) => (
        <ListEntry
          key={entry.id}
          label={entry.name}
          onRemoveClick={() => {
            onRemoveClick(entry);
          }}
          onLabelClick={onLabelClick}
        />
      ))}
    </ul>
  );
};

export default SimpleList;
