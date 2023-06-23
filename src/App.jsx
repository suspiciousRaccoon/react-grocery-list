import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('list')) || [];
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());
  const [isEditingName, setIsEditingName] = useState(false);

  function addItem(itemName) {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added');
  }

  function removeItem(itemId) {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item removed');
  }

  function removeAllItems() {
    setItems([]);
    setLocalStorage([]);
    toast.success('All items removed');
  }

  function editItem(itemId, editName) {
    const newItems = items.map((item) => {
      if (item.id === itemId && !editName) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      } else if (item.id === itemId && editName) {
        const newItem = { ...item, name: editName };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }

  function editName(item) {
    setIsEditingName(item);
  }

  return (
    <section className='section-center'>
      <Form
        addItem={addItem}
        editItem={editItem}
        isEditingName={isEditingName}
        setIsEditingName={setIsEditingName}
      />
      <Items
        items={items}
        removeAllItems={removeAllItems}
        removeItem={removeItem}
        editItem={editItem}
        editName={editName}
      />
      <ToastContainer position='top-center' />
    </section>
  );
};

export default App;
