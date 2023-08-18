import React from 'react';
import styles from './SimpleList.module.css';
import ListEntry from '../listEntry/ListEntry';

interface SimpleListProps<T> {
  entries: Array<T>;
  onRemoveClick: (entry: T) => void;
  onLabelClick: () => void;
}

const SimpleList = <T extends { id: number; name: string }>({
  entries,
  onRemoveClick,
  onLabelClick,
}: SimpleListProps<T>) => {
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
