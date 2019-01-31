import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle, ThemeProvider } from "styled-components";

import App from './App';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
    @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

    body {
        background: ${p => p.backgroundColor};
        color: ${p => p.bodyColor};
        padding: 0;
        margin: 0;
        font-family: ${p => p.theme.fontFamily};
        font-weight: 500;
    }

    h1 {
        font-family: Montserrat;
    }
`;

const theme = {
    fontFamily: "Courier",
    dark: "darkgrey",
    primary: "yellow"
};

ReactDOM.render(
    (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle backgroundColor="turquoise" bodyColor="#222" />
                <App />
            </>
        </ThemeProvider>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
