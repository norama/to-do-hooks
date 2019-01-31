import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';

const AppWrapper = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`;

const AppTitle = styled.h1`
  font-weight: 600;
`;

const AppIntro = styled.p`
  font-size: large;
  color: ${props => props.bodyColor};
  code {
    font-size: 1.3rem;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;

const EmojiWrapper = styled.span.attrs({
    role: 'img'
})``;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
            Edit <code>src/App.js</code> and save to reload.
        </AppIntro>

          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>

          <AppIntro>
            Components styled with <code>styled-components</code>{' '}
            <EmojiWrapper aria-label="Snowman">&#9731;</EmojiWrapper>
          </AppIntro>
        
      </AppWrapper>
    );
  }
}

export default App;
