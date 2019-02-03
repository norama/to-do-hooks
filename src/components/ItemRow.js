import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import { Row, Col } from "@bootstrap-styled/v4";

import { StyledItemRow, StyledCheckboxWrapper, StyledCheckbox, StyledTextarea } from './styles';
import { StyledDatetimeWrapper, StyledDatetime, StyledDisabledDatetime } from './styles';

import { DatetimePicker, Datetime } from './Datetime';
import ToDoItem from '../data/ToDoItem';

import { formatDatetime } from './Datetime';

const summary = (item) => {
    const text = item.text();
    return text.length < 10 ? text : text.substring(0, 10) + " ...";
};

const reminderContent = (item) => (
    "Reminder for TODO ("+summary(item)+") due at: "+formatDatetime(item.reminder())
);

const ItemRow = ({ item, onChange, remind, onRemindFinished }) => {

    useEffect(() => {

        const reminder = () => {
            toast.info(reminderContent(item), {
                onOpen: () => {
                    const element = document.getElementById(item.id());
                    element.scrollIntoView({ behavior: "smooth" });
                },
                onClose: () => {
                    onRemindFinished(item.id(), item.datetime(null));
                },
                position: toast.POSITION.TOP_LEFT,
                autoClose: 30000
            });
        };

        if (remind) {
            reminder();
        }

    }, [remind]);

    const handleDoneChange = () => {
        const done = !item.done();
        onChange(item.id(), item.done(done));
    };

    const handleTextChange = (e) => {
        const text = e.target.value;
        item.text(text);
    };

    const handleReminderChange = (datetime) => {
        onChange(item.id(), item.datetime(datetime));
    };

    return (
        <StyledItemRow id={item.id()} remind={remind}>
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
                    <StyledTextarea defaultValue={item.text()} onChange={handleTextChange} />
                ) : null }
            </Col>

            <Col md={2}>
                <StyledCheckboxWrapper>
                    <StyledCheckbox type="checkbox" checked={item.done()} onChange={handleDoneChange} width="25px" height="25px" cursor="pointer"/>
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