import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from "@bootstrap-styled/v4";

import { StyledItemRow, StyledCheckboxWrapper, StyledCheckbox, StyledTextarea } from './styles';

import ToDoItem from '../data/ToDoItem';

const ItemRow = ({ item, onChange }) => {

    const handleDoneChange = () => {
        const done = !item.done();
        onChange(item.done(done));
    };

    const handleTextChange = (e) => {
        const text = e.target.value;
        onChange(item.text(text));
    };
    
    return (
        <StyledItemRow>
            <Col md={5}>
                { !item.done() ? (
                    <StyledTextarea value={item.text()} onChange={handleTextChange} />
                ) : null }
            </Col>

            <Col md={2}>
                <StyledCheckboxWrapper>
                    <StyledCheckbox type="checkbox" value={item.done()} onChange={handleDoneChange} width="25px" height="25px" cursor="pointer"/>
                </StyledCheckboxWrapper>
            </Col>

            <Col md={5}>
                { item.done() ? (
                    <StyledTextarea value={item.text()} onChange={handleTextChange} disabled />
                ) : null }
            </Col>
        </StyledItemRow>
    );
};

ItemRow.propTypes = {
    item: PropTypes.instanceOf(ToDoItem).isRequired
};

export default ItemRow;