import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../../organisms/Navbar';
import Calls from './Calls';
import Contacts from './Contacts';
import Chat from './Chat';

import { Container } from './styles';

const ChatApp = () => (
  <Router>
    <Container>
      <Navbar />
        <Route exact path ="/app/calls" component={Calls} />
        <Route exact path ="/app/contacts" component={Contacts} />
        <Route path ="/app/chat/*" component={Chat} />
    </Container>
  </Router>
);

export default ChatApp;