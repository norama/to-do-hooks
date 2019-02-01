import React from 'react';

import { Grid, Box, Flex, InlineBlock, InlineFlex, Input, Button } from "reakit";

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledButton = styled.div`
    position: fixed;
    right: 70px;
    align-self: center;
`;

const StyledInput = styled(Input)`
    margin: auto;
    width: 40em;
    height: 5em;
`;


const AddItem = ({ onAdd }) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAdd = () => {
        onAdd(value);
    };
    
    return (
        <>
            <StyledInput as="textarea" value={value} onChange={handleChange} />
            <StyledButton>
                <Button onClick={handleAdd} width="10em" height="2em">ADD</Button>
            </StyledButton>
        </>
    )
};

AddItem.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default AddItem;
