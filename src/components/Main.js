import React from 'react';
import { Grid, Box, Flex, InlineBlock, InlineFlex, Input, Button } from "reakit";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import AddItem  from './AddItem';

import ToDoItem from '../data/ToDoItem';

const Title = styled.h1`
    text-align: center;
    font-size: 2em;
`;

const StyledGrid = styled(Grid)`
    && {
        padding: 50px;
    }
`;

const width = "400px";

const StyledGridItem = styled(Grid.Item)`
    && {
        border: 2px solid grey;
        border-radius: 8px;
        background-color: white;
        padding: 15px;
        width: ${width};
        margin: auto;
    }
`;

const StyledEmptyGridItem = styled(Grid.Item)`
    && {
        width: ${width};
        margin: auto;
        text-align: center;
    }
`;

const StyledGridDone = styled(Grid.Item)`
    align-self: center;
    margin: auto;
`;

const template = `
    "a a b c c" 60px
`;

const Main = () => {

    const [items, setItems] = useState([]);

    const handleAdd = (value) => {
        setItems(items => [new ToDoItem(value)].concat(items));
    };

    const handleChange = (item) => {
        setItems(items => [...items]);
    };

    return (
        <>
            <Title>ToDo List</Title>
            <Flex position="relative">
                <AddItem onAdd={handleAdd} />
            </Flex>
            <StyledGrid autoRows="auto" gap="3vw">
            <Grid template={template} gap="3vw">
                <StyledEmptyGridItem area="a">111</StyledEmptyGridItem><StyledGridDone area="b">222</StyledGridDone><StyledEmptyGridItem area="c">333</StyledEmptyGridItem>
                </Grid>
                {items.map((item) => (<Item item={item} onChange={handleChange} key={item.id()} />))}
            </StyledGrid>
        </>
    );
};

const Item = ({ item, onChange }) => {

    const handleDoneChange = () => {
        const done = !item.done();
        onChange(item.done(done));
    };
    
    return (
        <Grid template={template} gap="3vw">
            { !item.done() ? (
                    <StyledGridItem area="a">
                        {item.text()}
                    </StyledGridItem>
                ) : (<StyledEmptyGridItem area="a" />)
            }
            
            <StyledGridDone area="b">
                <Input type="checkbox" value={item.done()} onChange={handleDoneChange} width="25px" height="25px" cursor="pointer"/>
            </StyledGridDone>

            { item.done() ? (
                    <StyledGridItem area="c">
                        {item.text()}
                    </StyledGridItem>
                ) : (<StyledEmptyGridItem area="c" />)
            }
        </Grid>
    );
};

Item.propTypes = {
    item: PropTypes.instanceOf(ToDoItem).isRequired
};

export default Main;
