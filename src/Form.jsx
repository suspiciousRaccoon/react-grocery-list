import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
const Form = ({ addItem, editItem, isEditingName, setIsEditingName }) => {
  const [newItemName, setNewItemName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!newItemName) {
      toast.error('Please provide a value');
      return;
    }
    if (isEditingName) {
      editItem(isEditingName.id, newItemName);
      setNewItemName('');
      setIsEditingName(false);
      toast.success('Item edited');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery list</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={(e) => {
            setNewItemName(e.target.value);
          }}
          placeholder={isEditingName ? isEditingName.name : ''}
        />
        {isEditingName ? (
          <button type='submit' className='btn'>
            edit item
          </button>
        ) : (
          <button type='submit' className='btn'>
            add item
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
