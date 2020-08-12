import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'; 

import Login from './components/pages/Login';
import Chat from './components/pages/Chat';

import { ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 1px;
}

body, #root {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

button {
  cursor: pointer;
  outline: none;
  background-color: transparent;
}

input {
  outline: none;
}
`;

const theme = {
  mode: 'dark',
  primary: '#56CCF2',
  light: '#FFF',
  dark: '#242424',
};

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <ThemeProvider theme={theme} >
          <Route path="/" exact component={Login} />
          <Route path="/chat" exact component={Chat} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
