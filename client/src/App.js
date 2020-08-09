import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'; 

import Login from './components/Login';
import Chat from './components/pages/Chat';

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
  background-color: transparent;
}
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
