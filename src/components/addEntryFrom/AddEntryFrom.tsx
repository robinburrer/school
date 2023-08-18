import React, { useState } from 'react';
import styles from './AddEntryFrom.module.css';

interface AddEntryFromProps {
  addLabel: string;
  onAddButtonClick: (value: string) => void;
}

const AddEntryFrom: React.FC<AddEntryFromProps> = ({
  addLabel,
  onAddButtonClick,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addButtonHandler = (event: any) => {
    event.preventDefault();
    onAddButtonClick(inputValue);
    setInputValue('');
  };

  return (
    <div className={styles.container}>
      <form>
        <input
          type='text'
          required
          pattern='.*\S.*'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type='submit' disabled={!inputValue} onClick={addButtonHandler}>
          {addLabel}
        </button>
      </form>
    </div>
  );
};

export default AddEntryFrom;
