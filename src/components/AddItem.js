import React from 'react';

import { Row, Col } from "@bootstrap-styled/v4";

import { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledButton, StyledTextarea } from './styles';

const AddItem = ({ onAdd }) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAdd = () => {
        onAdd(value);
        setValue('');
    };
    
    return (
        <Row>
            <Col md={4}></Col>
            <Col md={4}><StyledTextarea value={value} onChange={handleChange} /></Col>
            <Col md={4}><StyledButton onClick={handleAdd}>ADD</StyledButton></Col>
        </Row>
    )
};

AddItem.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default AddItem;
