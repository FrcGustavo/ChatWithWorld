import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'; 

import UserProvider from './store';
import Login from './components/pages/Login';
import ChatApp from './components/pages/ChatApp';

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

function App() {
  const [theme, setTheme] = useState({
    mode: 'light',
    primary: '#56CCF2',
    light: '#FFF',
    dark: '#242424',
  });
  useEffect(() => {
    window.addEventListener('theme-dark', () => {
      setTheme({ 
        ...theme,
        mode: theme.mode === 'dark' ? 'light' : 'dark'
      });
      console.log('EMITIDO');
    });
  }, [theme]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <UserProvider>
          <ThemeProvider theme={theme} >
            <Route path="/" exact component={Login} />
            <Route path="/app/*" component={ChatApp} />
          </ThemeProvider>
        </UserProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
