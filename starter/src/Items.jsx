import React from 'react';
import SingleItem from './SingleItem';

const Items = ({ items, removeAllItems, removeItem, editItem, editName }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
            editName={editName}
          />
        );
      })}
      {items.length ? (
        <button className='btn btn-block' onClick={removeAllItems}>
          Remove All Items
        </button>
      ) : null}
    </div>
  );
};

export default Items;
