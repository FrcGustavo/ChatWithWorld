import React from 'react';

import ChatButton from '../../../atoms/ChatButton';
import Messages from '../../../organisms/Messages';

import Search from '../../../atoms/InputSearch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container, Chats } from './styles';

const Chat = () => (
  <Router>
    <Chats>
      <Search />
      <ChatButton
        to="/"
        name="Francisco Gustavo"
        message="Hello friend in hard code"
        badge="16"
      />
      <ChatButton
        to="/"
        name="Francisco Gustavo"
        message="Hello friend in hard code"
        badge="1"
        active
        />
    </Chats>
    <Route exact path="/app/chat" component={Messages} />
    <Route exact path="/app/chat/:id" component={Messages} />
  </Router>
);

export default Chat;