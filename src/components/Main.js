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
        background-color: red;
        padding: 15px;
    }
`;

const Main = () => {

    const handleAdd = () => { alert('ADD'); };
    return (
        <>
            <Title>ToDo List</Title>
            <Flex position="relative">
                <StyledInput as="textarea" />
                <StyledButton>
                    <Button onClick={handleAdd} width="10em" height="2em">ADD</Button>
                </StyledButton>
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

export default Main;
