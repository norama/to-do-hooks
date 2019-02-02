import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AddItem  from './AddItem';
import ItemList from './ItemList';

import ToDoItem from '../data/ToDoItem';

import { StyledH1 } from './styles';

const Main = () => {

    const [items, setItems] = useState([]);

    const handleAdd = (value) => {
        setItems(items => [new ToDoItem(value)].concat(items));
    };

    const handleChange = (item) => {
        setItems(items => [...items]);
    };

    return (
        <>
            <StyledH1>ToDo List</StyledH1>
            <AddItem onAdd={handleAdd} />
            <ItemList items={items} onChange={handleChange} />
        </>
    );
};

export default Main;
