import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from "@bootstrap-styled/v4";

import { StyledItemRow, StyledCheckboxWrapper, StyledCheckbox, StyledTextarea } from './styles';
import { StyledDatetimeWrapper, StyledDatetime, StyledDisabledDatetime } from './styles';

import { DatetimePicker, Datetime } from './Datetime';
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

    const handleReminderChange = (datetime) => {
        onChange(item.datetime(datetime));
    };

    return (
        <StyledItemRow>
            <Col md={2}>
                { !item.done() ? (
                    <StyledDatetimeWrapper>
                        <StyledDatetime>
                            <DatetimePicker datetime={item.datetime()} onChange={handleReminderChange} />
                        </StyledDatetime>
                    </StyledDatetimeWrapper>
                ) : null }
            </Col>

            <Col md={3}>
                { !item.done() ? (
                    <StyledTextarea value={item.text()} onChange={handleTextChange} />
                ) : null }
            </Col>

            <Col md={2}>
                <StyledCheckboxWrapper>
                    <StyledCheckbox type="checkbox" value={item.done()} onChange={handleDoneChange} width="25px" height="25px" cursor="pointer"/>
                </StyledCheckboxWrapper>
            </Col>

            <Col md={3}>
                { item.done() ? (
                    <StyledTextarea value={item.text()} onChange={handleTextChange} disabled />
                ) : null }
            </Col>

            <Col md={2}>
                { item.done() ? (
                    <StyledDatetimeWrapper>
                        <StyledDisabledDatetime>
                            <Datetime datetime={item.datetime()} />
                        </StyledDisabledDatetime>
                    </StyledDatetimeWrapper>
                ) : null }
            </Col>
        </StyledItemRow>
    );
};

ItemRow.propTypes = {
    item: PropTypes.instanceOf(ToDoItem).isRequired
};

export default ItemRow;