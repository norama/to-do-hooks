import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, H2 } from "@bootstrap-styled/v4";

import AddItem  from './AddItem';

import ToDoItem from '../data/ToDoItem';
import ItemRow from './ItemRow';

import { StyledH1, StyledItemList, StyledItemRow, StyledH2 } from './styles';

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

const ItemList = ({ items, onChange }) => {
    return (
        <StyledItemList>
            <ItemListHeader />
            {items.map((item) => (<ItemRow item={item} onChange={onChange} key={item.id()} />))}
        </StyledItemList>
    );
};

const ItemListHeader = () => (
    <StyledItemRow>
        <Col md={5}><StyledH2>ToDo</StyledH2></Col>
        <Col md={2}><StyledH2>Mark as Done</StyledH2></Col>
        <Col md={5}><StyledH2>Done</StyledH2></Col>
    </StyledItemRow>
);

export default Main;
