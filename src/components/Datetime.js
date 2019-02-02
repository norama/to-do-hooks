import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import { DatetimePickerTrigger } from 'rc-datetime-picker';
import 'rc-datetime-picker/dist/picker.min.css';

import { StyledDisabledInput } from './styles';

const format = (datetime) => (
    datetime ? ' ' + datetime.format('DD.MM.YYYY HH:mm') : ''
);

export const formatDatetime = (datetime) => (datetime.format('DD.MM.YYYY HH:mm'));

export const DatetimePicker = ({ datetime, onChange }) => {

    const datetimeShortcuts = {
        'Today': moment(),
        'Tomorrow': moment().add(1, 'days'),
        'Clear': ''
    };

    return (
        <DatetimePickerTrigger
            shortcuts={datetimeShortcuts} 
            moment={datetime ? datetime : moment()}
            minDate={moment()}
            onChange={onChange}>

            <input type="text" value={format(datetime)} readOnly />

        </DatetimePickerTrigger>
    );
};

DatetimePicker.propTypes = {
    datetime: PropTypes.instanceOf(moment),
    onChange: PropTypes.func.isRequired
};

export const Datetime = ({ datetime }) => (
    <DatetimePickerTrigger
        moment={datetime}
        disabled={true}
    >
        <StyledDisabledInput type="text" value={format(datetime)} readOnly />

    </DatetimePickerTrigger>
);
