import React from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/*
 * https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
 */
const Timer = ({ callback, period }) => {
    const intervalRef = useRef();

    useEffect(() => {
        const id = setInterval(() => {
            callback();
        }, period);
        intervalRef.current = id;
        return () => {
            clearInterval(intervalRef.current);
        };
    });

    return null;
};

Timer.propTypes = {
    callback: PropTypes.func.isRequired,
    period: PropTypes.number.isRequired
};

export default Timer;
