import React from 'react';
import { Grid, Box, Flex, InlineBlock, InlineFlex, Input, Button } from "reakit";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
    font-size: 2em;
`;

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

const StyledGrid = styled(Grid)`
    && {
        padding: 50px;
    }
`;

const StyledGridItem = styled(Grid.Item)`
    && {
        border: 2px solid grey;
        border-radius: 8px;
        background-color: white;
        padding: 15px;
    }
`;

const Main = () => {

    const handleAdd = (value) => {
        alert('ADD: ' + value);
    };

    return (
        <>
            <Title>ToDo List</Title>
            <Flex position="relative">
                <AddItem onAdd={handleAdd} />
            </Flex>
            <StyledGrid columns="repeat(2, 1fr)" autoRows="auto" gap="3vw">
                <StyledGridItem>
                    Non proident duis cupidatat veniam ea. Lorem esse ullamco do velit voluptate
                    anim eiusmod pariatur aute ullamco est. Magna incididunt elit dolor quis
                </StyledGridItem>
                <StyledGridItem>
                    Culpa aliquip ex sunt duis. Nulla magna reprehenderit fugiat in proident
                    officia laboris reprehenderit proident est pariatur eiusmod.
                </StyledGridItem>
                <StyledGridItem>
                    Commodo magna aliqua reprehenderit amet ex dolor sunt enim aliquip. Nulla
                </StyledGridItem>
            </StyledGrid>
        </>
    );
};

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

export default Main;
