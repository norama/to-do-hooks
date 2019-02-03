import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import { Col } from "@bootstrap-styled/v4";

import ItemRow from './ItemRow';

import { StyledItemList, StyledItemHeader, StyledH2 } from './styles';

import Timer from './Timer';

import ToDoItem from '../data/ToDoItem';

const LOOKUP = process.env.REACT_APP_REMINDER_LOOKUP * 60 * 1000; // in ms
const LOOKAHEAD = process.env.REACT_APP_REMINDER_LOOKAHEAD;

const ItemList = ({ items, onChange, onRemind, remindItemId, onRemindFinished }) => {

    useEffect(() => {

        if (remindItemId && !items.find((item) => (item.id() === remindItemId))) {
            onRemindFinished(remindItemId, null);
        }

    }, [items, remindItemId]);

    const handleReminders = () => {
        const lookaheadTime = moment().add(LOOKAHEAD, 'minutes');
        const reminderItems = items.filter((item) => {
            const reminder = item.reminder();
            return reminder && reminder.isBefore(lookaheadTime);
        });
        onRemind(reminderItems);
    };

    return (
        <StyledItemList>
            <ItemListHeader />
                {items.map((item) => (
                    <ItemRow
                        item={item}
                        onChange={onChange}
                        remind={item.id() === remindItemId}
                        onRemindFinished={onRemindFinished}
                        key={item.id()}
                    />))}
            <Timer callback={handleReminders} period={LOOKUP} />
        </StyledItemList>
    );
};

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(ToDoItem)).isRequired,
    onChange: PropTypes.func.isRequired,
    onRemind: PropTypes.func.isRequired,
    remindItemId: PropTypes.string,
    onRemindFinished: PropTypes.func.isRequired
};

const ItemListHeader = () => (
    <StyledItemHeader>
        <Col md={2}><StyledH2>Reminder</StyledH2></Col>
        <Col md={3}><StyledH2>ToDo</StyledH2></Col>
        <Col md={2}><StyledH2>Mark as Done</StyledH2></Col>
        <Col md={3}><StyledH2>Done</StyledH2></Col>
        <Col md={2}><StyledH2>Completion Time</StyledH2></Col>
    </StyledItemHeader>
);

export default ItemList;