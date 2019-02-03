import React from 'react';
import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddItem  from './AddItem';
import ItemList from './ItemList';

import ToDoItem from '../data/ToDoItem';

import { StyledH1 } from './styles';

const Main = () => {

    const [items, setItems] = useState([]);
    const [remindItems, setRemindItems] = useState([]);

    const handleAdd = (text) => {
        setItems(items => [new ToDoItem(text)].concat(items));
    };

    const handleChange = (id, newItem) => {
        if (newItem) {
            setItems(items => {
                const index = items.findIndex((item) => (item.id() === id));
                let newItems = [...items];
                newItems[index] = newItem;
                return newItems;
            });
        }
    };

    const handleRemindFinished = (id, newItem) => {
        setRemindItems(remindItems => remindItems.filter((item) => (item.id() !== id)));
        handleChange(id, newItem);
    };

    const remindItemId = remindItems.length ? remindItems[0].id() : null;

    return (
        <>
            <StyledH1>ToDo List</StyledH1>
            <AddItem onAdd={handleAdd} />
            <ItemList
                items={items}
                onChange={handleChange}
                onRemind={setRemindItems}
                remindItemId={remindItemId}
                onRemindFinished={handleRemindFinished}
            />
            <ToastContainer />
        </>
    );
};

export default Main;
