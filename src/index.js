import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle, ThemeProvider } from "styled-components";

import { GLOBAL_STYLE } from './components/styles';

import Main from './components/Main';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

    body {
        background: ${p => p.backgroundColor};
        color: ${p => p.bodyColor};
        padding: 0;
        margin: 0;
        font-weight: 500;
        font-family: ${p => p.theme.fontFamily};
    }

    h1 {
        font-family: Montserrat;
    }
`;

const theme = {
    fontFamily: "Montserrat"
};

ReactDOM.render(
    (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle {...GLOBAL_STYLE} />
                <Main />
            </>
        </ThemeProvider>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
