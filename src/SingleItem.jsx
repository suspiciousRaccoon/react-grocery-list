import React from 'react';
import { FaEdit } from 'react-icons/fa';
const SingleItem = ({ item, removeItem, editItem, editName }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => {
          editItem(item.id, false);
        }}
      />
      <button
        type='button'
        className='btn edit-btn'
        onClick={() => {
          editName({ id: item.id, name: item.name });
        }}>
        <FaEdit />
      </button>
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}>
        {item.name}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => {
          removeItem(item.id);
        }}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
