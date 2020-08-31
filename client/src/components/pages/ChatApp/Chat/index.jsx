import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Chats from '../../../organisms/Chats';
import Messages from '../../../organisms/Messages';
import NotMessages from '../../../molecules/NotMessages';

import { Container } from './styles';

const Chat = () => (
  <Router>
    <Chats />
    <Container>
      <Route exact path="/app/chat" component={NotMessages} />
      <Route exact path="/app/chat/:id" component={Messages} />
    </Container>
  </Router>
);

export default Chat;