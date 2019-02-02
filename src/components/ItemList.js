import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from "@bootstrap-styled/v4";

import ItemRow from './ItemRow';

import { StyledItemList, StyledItemRow, StyledH2 } from './styles';


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
        <Col md={2}><StyledH2>Reminder</StyledH2></Col>
        <Col md={3}><StyledH2>ToDo</StyledH2></Col>
        <Col md={2}><StyledH2>Mark as Done</StyledH2></Col>
        <Col md={3}><StyledH2>Done</StyledH2></Col>
        <Col md={2}><StyledH2>Completion Time</StyledH2></Col>
    </StyledItemRow>
);

export default ItemList;