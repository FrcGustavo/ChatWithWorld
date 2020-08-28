import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../../organisms/Navbar';
import Chat from './Chat';

import { Container } from './styles';

const ChatApp = () => (
  <Container>
    <Navbar />
    <Router>
      <Route exact path ="/app/calls" component={Chat} />
      <Route exact path ="/app/contacts" component={Chat} />
      <Route path ="/app/chat/*" component={Chat} />
    </Router>
  </Container>
);

export default ChatApp;